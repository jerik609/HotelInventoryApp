import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from './comment.service';
import { Comment } from './comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  constructor(private commentService: CommentService) { }

  comments$: Observable<Comment[]> = this.commentService.getComments$;

  ngOnInit(): void {
    
  }

}
