import { Gearbox, CarType } from './enums';
import { ILocation } from './location';
import { IInsurance } from '@interfaces/insurance';

export interface ICar {
  Id?: string;
  Price: number;
  Model: string;
  Fuel: string;
  Year: number;
  Seats: number
  ChildrenBooster: number
  AC: boolean;
  Kids: boolean;
  Pets: boolean;
  Color: string;
  Pictures: string[];
  PictureIndex: string[];
  Type: CarType;
  Location: ILocation;

  Gearbox?: Gearbox;
  Created?: Date;
  Marked?: Date;
  Insurance: IInsurance;
}
