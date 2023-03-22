import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetElemPipe } from './getElemPipe';

@NgModule({
  declarations: [GetElemPipe],
  imports: [
    CommonModule
  ],
  exports: [
    GetElemPipe
  ]
})
export class CustompipesModule { }
