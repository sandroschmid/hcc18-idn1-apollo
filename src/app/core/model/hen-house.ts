import { HenHouseDoor } from './hen-house-door';
import { HenHouseSensors } from './HenHouseSensors';

export class HenHouse {
  public door: HenHouseDoor;
  public temperatureOutside: number;
  public temperatureInside: number;
  public sensors: HenHouseSensors;
}
