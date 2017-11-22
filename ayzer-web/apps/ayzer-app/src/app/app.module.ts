import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { SharedUiModule } from '@ayzer-app/shared-ui/src/shared-ui.module';

@NgModule({
  imports: [
    BrowserModule, NxModule.forRoot(),
    SharedUiModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
