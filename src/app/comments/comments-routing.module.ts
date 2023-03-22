import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CommentService } from './comment.service';
import { CommentsComponent } from './comments.component';
import { Comment } from './comment';

const resolveGuard: ResolveFn<Comment[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
  const commentService = inject<CommentService>(CommentService);
  return commentService.getComments$;
}

const routes: Routes = [
  { 
    path: '', 
    component: CommentsComponent, 
    resolve: {
      comments: resolveGuard 
    }
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
