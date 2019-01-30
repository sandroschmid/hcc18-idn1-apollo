import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HenHouse } from '../../../core/model/hen-house';
import { HenHouseService } from '../../../core/service/hen-house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {

  public view: {
    eggsCount: number,
    henHouse: HenHouse,
    closeChickens: string[]
  } = {
    eggsCount: 0,
    henHouse: undefined,
    closeChickens: [
      'https://www.stubai.at/blog/wp-content/uploads/2016/10/Hennen-Bild-7.jpg',
      'https://apps-cloud.n-tv.de/img/17352026-1483444717000/16-9/750/kuken-mannlich.jpg',
      'https://www.huehner-haltung.de/img/glucke-kueken-1-768x474.jpg'
    ]
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _henHouse: HenHouseService) {
  }

  public ngOnInit(): void {
    this._henHouse.getAvailableEggsCount()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(eggsCount => this.view.eggsCount = eggsCount);

    this._henHouse.getHenHouse()
      .pipe(takeUntil(this._ngDestroy))
      .subscribe(henHouse => this.view.henHouse = henHouse);
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public imgPrev(): void {
    this.view.closeChickens.unshift(this.view.closeChickens.pop());
  }

  public imgNext(): void {
    this.view.closeChickens.push(this.view.closeChickens.shift());
  }

}
