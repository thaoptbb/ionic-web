import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'ionic-home-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavigatorComponent implements OnInit, ViewDidEnter {
  ionViewDidEnter(): void {
    console.log('b')
  }
  ngOnInit(): void {
    console.log('a')
  }
  //#region Properties
  //#endregion
}
