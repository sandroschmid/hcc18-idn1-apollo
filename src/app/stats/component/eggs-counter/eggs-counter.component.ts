import { Component, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Chicken } from '../../../core/model/chicken';
import { ChickenService } from '../../../core/service/chicken.service';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-eggs-counter',
  templateUrl: './eggs-counter.component.html',
  styleUrls: ['./eggs-counter.component.scss']
})
export class EggsCounterComponent implements OnDestroy {

  public readonly view: {
    chicken: Chicken,
    largeCount: number,
    mediumCount: number,
    smallCount: number,
  } = {
    chicken: undefined,
    largeCount: 0,
    mediumCount: 0,
    smallCount: 0,
  };

  private readonly _ngDestroy = new Subject<void>();

  public constructor(private readonly _chickenService: ChickenService) {
  }

  @Input()
  public set chicken(chicken: Chicken) {
    this.view.chicken = chicken;
  }

  public ngOnDestroy(): void {
    this._ngDestroy.next();
  }

  public increase(size: 'l' | 'm' | 's'): void {
    this.view.chicken.eggsToday++;
    this.view.chicken.eggsTotal++;
    switch (size) {
      case 'l':
        this.view.largeCount++;
        break;
      case 'm':
        this.view.mediumCount++;
        break;
      case 's':
        this.view.smallCount++;
        break;
    }

    this.saveChicken();
  }

  public decrease(size: 'l' | 'm' | 's'): void {
    this.view.chicken.eggsToday--;
    this.view.chicken.eggsTotal--;
    switch (size) {
      case 'l':
        this.view.largeCount--;
        break;
      case 'm':
        this.view.mediumCount--;
        break;
      case 's':
        this.view.smallCount--;
        break;
    }

    this.saveChicken();
  }

  private saveChicken(): void {
    this._chickenService.updateChicken(this.view.chicken)
      .pipe(take(1), takeUntil(this._ngDestroy))
      .subscribe(chicken => this.view.chicken = chicken);
  }

}
