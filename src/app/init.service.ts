import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  #config: any;

  getConfig(): any {
    return this.#config;
  }

  constructor(private httpClient: HttpClient) { }
  
  init() {
    return this.httpClient
      .get('/assets/config.json')
      .pipe(
        tap((config) => this.#config = config)
      );
  }
}
