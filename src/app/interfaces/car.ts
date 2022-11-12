import { Gearbox, CarType } from './enums';
import { ILocation } from './location';
import { IInsurance } from '@interfaces/insurance';

export interface ICar {
  Id?: string;
  Model: string;
  Year: number;
  AC: boolean;
  Kids: boolean;
  Color: string;
  Pictures: string[];
  Type: CarType;
  Location: ILocation;
  Price: number;
  Gearbox?: Gearbox;
  Created?: Date;
  Marked?: Date;
  Insurance: IInsurance;
}
