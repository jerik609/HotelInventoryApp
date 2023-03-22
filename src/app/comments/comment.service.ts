import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getComments$: Observable<Comment[]> = this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  
}
