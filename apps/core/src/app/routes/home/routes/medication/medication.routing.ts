import { RouterModule } from '@angular/router';
import { HomeMedicationComponent } from './medication.component';

export const medicationRoutes = RouterModule.forChild([
  {
    path: '',
    component: HomeMedicationComponent,
  },
]);
