import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog.component',
  templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  
  result!: string;
  
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) {}

  replyNo(): string {
    return 'no';
  }

  replyYes(): string {
    return 'yes';
  }

}