import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IFilter } from '@interfaces/filter';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  filterForm = new FormGroup({
    electro: new FormControl(false),
    priceRange: new FormControl([25, 50]),
    distanceRange: new FormControl([10, 3000]),
  });
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    public readonly context: TuiDialogContext<IFilter, number>,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService
  ) {}
  get priceRange() {
    return this.filterForm.controls.priceRange as FormControl;
  }
  get distanceRange() {
    return this.filterForm.controls.distanceRange as FormControl;
  }
  get electro() {
    return this.filterForm.controls.electro as FormControl;
  }
  ngOnInit(): void {}

  onDone(): void {
    console.log(this.filterForm.value);
    console.log(this.context.data);
    this.context.completeWith(this.filterForm.value as IFilter);
  }
}
