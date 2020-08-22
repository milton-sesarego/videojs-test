import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VjsPlayerComponent } from './vjs-player/vjs-player.component';
import { VjsChaptersComponent } from './vjs-player/vjs-chapters/vjs-chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    VjsPlayerComponent,
    VjsChaptersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
