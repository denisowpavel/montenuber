import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICar } from '@interfaces/car';
import { CarType, Gearbox } from '@interfaces/enums';
import { IInsurance } from '@interfaces/insurance';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  public list(): Observable<ICar[]> {
    return this.MOCList();
  }

  public MOCList(): Observable<ICar[]> {
    return of([
      {
        Id: '0',
        Model: 'FIAT 500',
        Type: CarType.Sedan,
        Year: 2017,
        AC: false,
        Kids: false,
        Color: 'Black',
        Pictures: [
          'https://localcarhires.com/media/thumbs/models/64/Skoda-Fabia-2020.jpg.352x190_q85_crop.jpg',
          'https://localcarhires.com/media/thumbs/cars/2021/05/1D5A8017-min.jpg.352x190_q85_crop.jpg',
        ],
        Gearbox: Gearbox.auto,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Montenegro',
          City: 'Budva',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
    ] as ICar[]);
  }
}
