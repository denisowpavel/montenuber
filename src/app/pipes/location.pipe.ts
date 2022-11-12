import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '@interfaces/location';

@Pipe({
  name: 'location',
})
export class LocationPipe implements PipeTransform {
  transform(value: ILocation, ...args: unknown[]): string {
    let out = value.Country;
    if (value.Region) {
      out += `, ${value.Region}`;
    }
    out += `, ${value.City}`;
    if (value.Area) {
      out += `, ${value.Area}`;
    }
    return out;
  }
}
