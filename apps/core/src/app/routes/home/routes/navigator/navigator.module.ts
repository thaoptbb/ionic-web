import { NgModule } from '@angular/core';
import { HomeNavigatorComponent } from './navigator.component';
import { CommonModule } from '@angular/common';
import { navigatorRoutes } from './navigator.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeNavigatorComponent],
  exports: [HomeNavigatorComponent],
  imports: [CommonModule, navigatorRoutes, IonicModule],
})
export class HomeNavigatorModule {}
