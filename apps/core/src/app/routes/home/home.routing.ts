import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'navigator',
        loadChildren: () =>
          import('./routes/navigator/navigator.module').then(
            (m) => m.HomeNavigatorModule
          ),
      },
      {
        path: 'tracker',
        loadChildren: () =>
          import('./routes/tracker/tracker.module').then(
            (m) => m.HomeTrackerModule
          ),
      },
      {
        path: 'medication',
        loadChildren: () =>
          import('./routes/medication/medication.module').then(
            (m) => m.HomeMedicationModule
          ),
      },
      {
        path: '',
        redirectTo: 'navigator',
        pathMatch: 'full',
      },
    ],
  },
]);
