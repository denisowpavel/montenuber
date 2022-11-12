import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ICar } from '@interfaces/car';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarViewComponent implements OnInit {
  @Input() car?: ICar;
  pictureIndex = 0;
  constructor() {}

  ngOnInit(): void {}
}
