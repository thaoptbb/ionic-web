import { NgModule } from '@angular/core';
import { medicationRoutes } from './medication.routing';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeMedicationComponent } from './medication.component';

@NgModule({
  declarations: [HomeMedicationComponent],
  exports: [HomeMedicationComponent],
  imports: [CommonModule, medicationRoutes, IonicModule],
})
export class HomeMedicationModule {}
