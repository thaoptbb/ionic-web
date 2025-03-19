import { RouterModule } from '@angular/router';
import { HomeNavigatorComponent } from './navigator.component';

export const navigatorRoutes = RouterModule.forChild([
  {
    path: '',
    component: HomeNavigatorComponent,
  },
]);
