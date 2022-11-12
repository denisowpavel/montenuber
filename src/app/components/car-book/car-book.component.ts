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

@Component({
  selector: 'app-car-book',
  templateUrl: './car-book.component.html',
  styleUrls: ['./car-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarBookComponent implements OnInit {
  readonly control = new FormControl(null, [
    tuiCardNumberValidator,
    tuiCardExpireValidator,
  ]);
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    public readonly context: TuiDialogContext<number, ICar>
  ) {}

  ngOnInit(): void {}

  get car(): ICar {
    return this.context.data as ICar;
  }
  get cardValid(): boolean {
    if (!this.control.value) {
      return false;
    }
    if (
      !this.control.value['card'] ||
      !this.control.value['cvc'] ||
      !this.control.value['expire']
    ) {
      return false;
    }
    if (
      (this.control.value['card'] as String).length !== 16 ||
      (this.control.value['cvc'] as String).length !== 3 ||
      (this.control.value['expire'] as String).length !== 5
    ) {
      return false;
    }
    if (parseInt((this.control.value['expire'] as String).split('/')[1]) < 21) {
      return false;
    }
    return true;
  }
}
