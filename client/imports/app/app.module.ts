// the modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
// the components
import { AppComponent } from './app.component';

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule,
  ],
  bootstrap : [
    AppComponent
  ]
})

export class AppModule {}
