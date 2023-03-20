import { inject, NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, CanMatchFn, Route, Router, RouterModule, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { NotfoundComponent } from './notfound/notfound.component';

const canActivateGuard: CanActivateFn = 
  (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    console.log("THE ACTIVATE GUARD RESOLVES!");
    let loginService = inject<LoginService>(LoginService);
    let router = inject<Router>(Router);
    return loginService.isLoggedIn ? true : router.navigate(['/login']);
  }

const canMatchGuard:  CanMatchFn = 
  (route: Route, segments: UrlSegment[]) => true;

// order matters!
const routes: Routes = [
  { 
    path:'employee', 
    component: EmployeeComponent,
    canActivate: [canActivateGuard]
  },
  { path:'login', component: LoginComponent },
  { 
    path:'rooms', 
    loadChildren: () => 
      import('./rooms/rooms.module').then((module) => module.RoomsModule),
    canActivate: [canActivateGuard]
  },
  { path:'', redirectTo:'/login', pathMatch: 'full'}, // no guard here :-) would not make sense
  { 
    path: 'booking', 
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    canActivate: [canActivateGuard]
  },
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
