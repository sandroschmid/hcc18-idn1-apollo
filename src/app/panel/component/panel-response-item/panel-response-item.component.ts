import { Component, Input } from '@angular/core';
import { AVATAR } from '../../../core/model/constants';
import { PanelResponse } from '../../../core/model/panel-response';

@Component({
  selector: 'app-panel-response-item',
  templateUrl: './panel-response-item.component.html',
  styleUrls: ['./panel-response-item.component.scss'],
})
export class PanelResponseItemComponent {

  public view: {
    avatar: string,
    response: PanelResponse
  } = {
    avatar: AVATAR,
    response: undefined,
  };

  @Input()
  public set response(response: PanelResponse) {
    this.view.response = response;
  }

}
