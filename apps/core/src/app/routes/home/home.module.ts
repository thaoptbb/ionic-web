import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { homeRoutes } from './home.routing';
import { IonicModule } from '@ionic/angular';
import { TranslocoPipe } from '@jsverse/transloco';
import { InlineSVGModule } from 'ng-inline-svg-2';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    homeRoutes,
    IonicModule,
    TranslocoPipe,
    InlineSVGModule,
  ],
})
export class HomeModule {}
