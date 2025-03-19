import { NgModule } from '@angular/core';
import { HomeTrackerComponent } from './tracker.component';
import { CommonModule } from '@angular/common';
import { trackerRoutes } from './tracker.routing';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [HomeTrackerComponent],
  exports: [HomeTrackerComponent],
  imports: [CommonModule, trackerRoutes, IonicModule],
})
export class HomeTrackerModule {}
