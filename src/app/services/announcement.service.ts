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
        Id: '1',
        Model: 'Skoda Fabia',
        Type: CarType.Hatchback,
        Year: 2019,
        AC: true,
        Kids: false,
        Color: 'White',
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
      {
        Id: '2',
        Model: 'Renault Clio 4',
        Type: CarType.Hatchback,
        Year: 2017,
        AC: true,
        Kids: false,
        Color: 'Black',
        Pictures: [
          'https://localcarhires.com/media/thumbs/models/663/Renault-Clio-Hb-Restyle-2016.jpeg.352x190_q85_crop.jpg',
          'https://localcarhires.com/media/thumbs/cars/2022/05/renta_car_-_ploce__1D5A70791651595469124.jpg.352x190_q85_crop.jpg',
          'https://localcarhires.com/media/thumbs/cars/2022/05/renta_car_-_ploce__1D5A70871651595469126.jpg.352x190_q85_crop.jpg',
          'https://localcarhires.com/media/thumbs/cars/2022/05/renta_car_-_ploce__1D5A70671651595469110.jpg.352x190_q85_crop.jpg',
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
      {
        Id: '4',
        Model: 'Lada Niva',
        Type: CarType.SUV,
        Year: 2014,
        AC: false,
        Kids: false,
        Color: 'Black',
        Pictures: [
          'https://лада.онлайн/uploads/posts/2018-03/1520306848_logo.jpg',
          'https://лада.онлайн/uploads/posts/2017-02/1486443488_kuzov-2121.4.jpg',
        ],
        Gearbox: Gearbox.manual,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Montenegro',
          City: 'Podgorica',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
      {
        Id: '5',
        Model: 'Ferrari F40',
        Type: CarType.Coupe,
        Year: 1998,
        AC: false,
        Kids: false,
        Color: 'Red',
        Pictures: [
          'https://media.evo.co.uk/image/private/s--FDIc9h2---/v1584722625/evo/2020/03/Ferrari%20F40%20icon-14.jpg',
          'https://autoblog.rs/gallery/108/227082-ferrari%20f40%209.jpg',
        ],
        Gearbox: Gearbox.manual,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Russia',
          City: 'Barnaul',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
      {
        Id: '6',
        Model: 'Volkswagen Tiguan',
        Type: CarType.SUV,
        Year: 2010,
        AC: true,
        Kids: true,
        Color: 'Brown',
        Pictures: [
          'https://www.vau-max.de/thumbs/img/News/39/25/00/p/p_full/schatz-ich-habe-unseren-touareg-geschrumpft-fahrbericht-vw-tiguan-2-0-tdi-170ps-mit-dem-suv-durch-europa-deutsche-autobahnen-oesterreichische-bergpaesse-und-kroatische-adriastrassen-im-schicken-kompakt-gelaendesportler-2539.jpg',
          'https://auto.ironhorse.ru/wp-content/uploads/2011/03/Tiguan-1-SS.jpg',
        ],
        Gearbox: Gearbox.auto,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Spain',
          City: 'Barcelona',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
      {
        Id: '7',
        Model: 'Daewoo Matiz',
        Type: CarType.Hatchback,
        Year: 2003,
        AC: false,
        Kids: false,
        Color: 'Black',
        Pictures: [
          'https://s0.rbk.ru/v6_top_pics/media/img/7/69/754788612440697.jpeg',
          'https://avatars.mds.yandex.net/get-autoru-vos/2167656/7505405c29e8563e43824b1d8524ac85/456x342n',
        ],
        Gearbox: Gearbox.manual,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Uzbekistan',
          City: 'Tashkent',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
      {
        Id: '8',
        Model: 'Volkswagen golf',
        Type: CarType.Hatchback,
        Year: 2020,
        AC: true,
        Kids: true,
        Color: 'White',
        Pictures: [
          'https://vf.vin/static/uploads/images/sr2/vw/2022/07/27/vw-golf-2018-wvwzzzauzj8908670-img-1.jpg',
          'https://1.bp.blogspot.com/-AWA5z7KalcM/WfJf-MEM3cI/AAAAAAACiCY/f-oyov3UXHg3h5MTTTGayFz4PBv_lerxACLcBGAs/s640/volkswagen-golf-2018-uruguay-highline-gti-autoblog-precio%2B%25283%2529.jpg',
        ],
        Gearbox: Gearbox.auto,
        Insurance: {} as IInsurance,
        Location: {
          Country: 'Serbian',
          City: 'Beograd',
          Latitude: 42.2858721,
          Longitude: 18.8431396,
        },
      },
    ] as ICar[]);
  }
}
