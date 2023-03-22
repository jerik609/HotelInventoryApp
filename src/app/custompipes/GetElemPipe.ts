import { Pipe, PipeTransform } from "@angular/core";
import { ParamMap } from "@angular/router";

  // https://stackoverflow.com/questions/57100997/using-array-map-in-angular-interpolation
  // https://angular.io/guide/pipes

  // id$: Observable<number> = this.activatedRoute.paramMap.pipe(
  //   map<ParamMap, number>(params => Number(params.get('roomid')) ?? 0)
  // )
  
@Pipe({
    name: 'getElem'
})
export class GetElemPipe implements PipeTransform {
    transform(input: ParamMap | null, key: string): number {
        console.log(JSON.stringify(input));
        return Number(input?.get(key)) ?? -1;
    }
}
