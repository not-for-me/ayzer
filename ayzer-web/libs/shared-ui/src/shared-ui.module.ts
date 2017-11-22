import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule, MatProgressBarModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedUiModule { }
