import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ionic-home-medication',
  templateUrl: './medication.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMedicationComponent {}
