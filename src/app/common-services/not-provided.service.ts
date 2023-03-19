import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root'} // not provided on purpose
)
export class NotProvidedService {

  hello: string = "not provided says hello";

  constructor() { }
}
