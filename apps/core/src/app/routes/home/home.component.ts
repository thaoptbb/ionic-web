import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { map, merge, Observable, tap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ionic-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  //#region Properties

  //#endregion

  //#region Constructor

  public constructor(
    protected readonly _router: Router,
    @Inject(DOCUMENT)
    protected readonly _dom: Document,
  ) {}

  public ngOnInit(): void {
    merge(
      this.checkActiveAsync('navigator'),
      this.checkActiveAsync('tracker'),
      this.checkActiveAsync('medication'),
    ).subscribe();
  }

  public checkActiveAsync(screenCode: string): Observable<boolean> {
    return this._router.events
      .pipe(
        map((navigationEvent) => {
          if (navigationEvent instanceof NavigationEnd) {
            return navigationEvent.urlAfterRedirects.includes(screenCode);
          }

          return this._dom.location.href.includes(screenCode);
        }),
      )
      .pipe(
        tap((active) => {
          this._dom
            .getElementById(`bottom-menu-${screenCode}`)
            ?.classList.toggle('active', active);
        }),
      );
  }

  //#endregion

  //#region Methods

  //#endregion
}
