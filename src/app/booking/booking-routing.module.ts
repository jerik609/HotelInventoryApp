import { NgModule } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivateFn, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { BookingComponent } from './booking.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const canDeactivate: CanDeactivateFn<BookingComponent> =
  async (component: BookingComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) => {
    if (component.bookingForm.dirty) {
      console.log("Form is dirty, check deactivation!");
      const dialogRef = component.openDialog('200ms', '150ms');
      let result = await lastValueFrom(dialogRef.afterClosed());
      console.log("result:", result);
      if (result !== 'yes') {
        return false;
      } 
    }
    return true;
  };

const routes: Routes = [
  { 
    path: '', 
    component: BookingComponent,
    canDeactivate: [canDeactivate]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
