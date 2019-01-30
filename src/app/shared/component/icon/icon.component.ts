import { Component, Input } from '@angular/core';
import { SVG_ICONS } from '../../../core/model/constants';
import { Icon } from '../../../core/model/icon';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {

  public view: { icon: Icon } = { icon: undefined };

  @Input()
  public set icon(iconName: string) {
    const index = SVG_ICONS.findIndex(svgIcon => svgIcon === iconName);
    this.view.icon = { name: iconName, isSvg: index >= 0 };
  }

}
