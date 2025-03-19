import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ionic-home-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTrackerComponent {}
