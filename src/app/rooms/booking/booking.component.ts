import { Component, Pipe } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable } from 'rxjs';
import { GetElemPipe } from '../../custompipes/GetElemPipe';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  constructor(private activatedRoute: ActivatedRoute) {
  }

  // https://stackoverflow.com/questions/57100997/using-array-map-in-angular-interpolation
  // https://angular.io/guide/pipes

  // id$: Observable<number> = this.activatedRoute.paramMap.pipe(
  //   map<ParamMap, number>(params => Number(params.get('roomid')) ?? 0)
  // )

  id$: Observable<ParamMap> = this.activatedRoute.paramMap;
}
