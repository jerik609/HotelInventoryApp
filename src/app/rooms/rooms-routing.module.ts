import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginService } from '../login/login.service';
import { BannerComponent } from './banner/banner.component';
import { BookingComponent } from './booking/booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { RoomsComponent } from './rooms.component';

const canActivateChild: CanActivateChildFn = 
  (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    let loginService: LoginService = inject<LoginService>(LoginService) 
    return loginService.isLoggedIn && loginService.isAdmin;
  };

const canActivateSecondChild: CanActivateChildFn = 
(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  let loginService: LoginService = inject<LoginService>(LoginService) 
  return canActivateChild(childRoute, state) && loginService.username.toLowerCase().includes("gandalf");
};

const routes: Routes = [
  { 
    path:'',
    component: RoomsComponent,
    canActivateChild: [canActivateChild],
    children: [
      { 
        path:'add', 
        component: RoomsAddComponent, 
        canActivateChild: [canActivateSecondChild],
        children: [ { path: 'banner', component: BannerComponent }]
      },
      // this matches anything, so it has to be below the more specific cases
      { path:':roomid', component: BookingComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
