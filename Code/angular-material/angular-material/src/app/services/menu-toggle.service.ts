import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';

@Injectable()
export class MenuToggleService {
  public menu: BehaviorSubject<boolean>;

  // check intial window with
  initial$ = Observable.of(window.innerWidth > 991 ? false : true);

  // check window width when resize
  resize$ = Observable.fromEvent(window, 'resize').map((event: any) => {
    return event.target.innerWidth > 991 ? false : true;
  });

  // merge those with using observable.merge to always get value
  // when window size greater than 991 and when resize
  mobile$ = Observable.merge(this.resize$, this.initial$).distinctUntilChanged();

  constructor() {
    this.menu = new BehaviorSubject(false);

    /**
     * Subscripbe {mobile$}
     * and change {this.menu} value
     * when browser resize or with less than 991
     */
    this.mobile$.subscribe((event) => {
      if (event == true) {
        return this.menu = new BehaviorSubject(true);
      }
      return this.menu = new BehaviorSubject(false);
    });
  }

  /**
   * Called from header component
   * to toggle sidebar
   * @return {!bool}
   */
  onToggleMenu () {
    this.menu.next(!this.menu.getValue());
  }
}
