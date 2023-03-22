import { Component, OnInit } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';
import { CommentService } from './comment.service';
import { Comment } from './comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  
  constructor(private commentService: CommentService,
    private route: ActivatedRoute) { }

  //comments$: Observable<Comment[]> = this.commentService.getComments$;
  comments$: Observable<Comment[]> = this.route.data.pipe(map(data => data['comments']))

  ngOnInit(): void { }

}
