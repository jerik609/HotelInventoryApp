import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  bookRoom(booking: any): Observable<any> {
    return this.httpClient.post('https://jsonplaceholder.typicode.com/posts', booking);
  }

}
