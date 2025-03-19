import { RouterModule } from '@angular/router';
import { HomeTrackerComponent } from './tracker.component';

export const trackerRoutes = RouterModule.forChild([
  {
    path: '**',
    component: HomeTrackerComponent,
  },
]);
