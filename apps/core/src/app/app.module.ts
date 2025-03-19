import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import player from 'lottie-web';
import { provideLottieOptions } from 'ngx-lottie';

const MODULES = [HttpClientModule];

const PROVIDERS = [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideLottieOptions({
    player: () => player,
  }),
];
const UI = [IonicModule.forRoot(), BrowserModule, BrowserAnimationsModule];
@NgModule({
  declarations: [AppComponent],
  imports: [AppRouting, UI, MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
