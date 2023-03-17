import { Pipe, PipeTransform } from "@angular/core";
import { ParamMap } from "@angular/router";

@Pipe({
    name: 'getElem'
})
export class GetElemPipe implements PipeTransform {
    transform(input: ParamMap | null, key: string): number {
        console.log(JSON.stringify(input));
        return Number(input?.get(key)) ?? -1;
    }
}
