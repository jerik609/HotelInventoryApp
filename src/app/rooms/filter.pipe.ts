import { Pipe, PipeTransform } from '@angular/core';
import { Room } from './rooms';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(rooms: Room[] | null, price: number): Room[] {
    return (rooms === null) ? [] : rooms.filter(room => room.price <= price);
  }

}
