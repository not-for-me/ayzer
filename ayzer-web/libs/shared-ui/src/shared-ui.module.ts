import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ]
})
export class SharedUiModule { }
