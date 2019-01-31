import { Component, Input } from '@angular/core';
import { Chicken } from '../../../core/model/chicken';
import { AVATAR } from '../../../core/model/constants';

@Component({
  selector: 'app-chicken-item',
  templateUrl: './chicken-item.component.html',
  styleUrls: ['./chicken-item.component.scss']
})
export class ChickenItemComponent {

  public readonly view: {
    avatar: string,
    chicken: Chicken
  } = {
    avatar: AVATAR,
    chicken: undefined
  };

  @Input()
  public set chicken(chicken: Chicken) {
    this.view.chicken = chicken;
  }

}
