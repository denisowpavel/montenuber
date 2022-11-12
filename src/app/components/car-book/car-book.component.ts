import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import { ICar } from '@interfaces/car';
import { FormControl } from '@angular/forms';
import {
  tuiCardExpireValidator,
  tuiCardNumberValidator,
} from '@taiga-ui/addon-commerce';
import { TuiDay, TuiDayRange } from '@taiga-ui/cdk';

@Component({
  selector: 'app-car-book',
  templateUrl: './car-book.component.html',
  styleUrls: ['./car-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarBookComponent implements OnInit {
  readonly controlCard = new FormControl(null, [
    tuiCardNumberValidator,
    tuiCardExpireValidator,
  ]);
  pictureIndex = 0;
  showPayment = false;
  date: any = null;
  readonly minDate = new TuiDay(2022, 11, 13);
  readonly controlDate = new FormControl(
    new TuiDayRange(new TuiDay(2022, 11, 13), new TuiDay(2022, 11, 14))
  );
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    public readonly context: TuiDialogContext<number, ICar>
  ) {}

  ngOnInit(): void {}

  get car(): ICar {
    return this.context.data as ICar;
  }
  get cardValid(): boolean {
    if (!this.controlCard.value) {
      return false;
    }
    if (
      !this.controlCard.value['card'] ||
      !this.controlCard.value['cvc'] ||
      !this.controlCard.value['expire']
    ) {
      return false;
    }
    if (
      (this.controlCard.value['card'] as String).length !== 16 ||
      (this.controlCard.value['cvc'] as String).length !== 3 ||
      (this.controlCard.value['expire'] as String).length !== 5
    ) {
      return false;
    }
    if (
      parseInt((this.controlCard.value['expire'] as String).split('/')[1]) < 21
    ) {
      return false;
    }
    return true;
  }

  get days(): number {
    if (!this.controlDate.value) {
      return 0;
    }
    if (!this.controlDate.value['from'] || !this.controlDate.value['to']) {
      return 0;
    }
    const from = this.controlDate.value['from'];
    const to = this.controlDate.value['to'];
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(from.year, from.month, from.day);
    const utc2 = Date.UTC(to.year, to.month, to.day);

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
  onBook(): void {
    this.showPayment = true;
  }
}
