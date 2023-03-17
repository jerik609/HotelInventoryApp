import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RoomsComponent } from './rooms/rooms.component';

// order matters!
const routes: Routes = [
  { path:'employee', component: EmployeeComponent },
  { path:'rooms', component: RoomsComponent },
  //{ path:'notfound', component: NotfoundComponent },
  { path:'', redirectTo:'/rooms', pathMatch: 'full'},
  //{ path:'**', redirectTo:'/notfound' } // whatever does not match the above, we will redirect to this
  { path:'**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
