import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ionic-home-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavigatorComponent implements OnInit {
  items: number[] = [];

  public ngOnInit() {
    this.items = Array.from({ length: 100 }, (_, i) => i + 1);
  }
}
