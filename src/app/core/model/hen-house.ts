import { HenHouseDoor } from './hen-house-door';
import { HenHouseSensors } from './hen-house-sensors';

export class HenHouse {
  public door: HenHouseDoor;
  public temperatureOutside: number;
  public temperatureInside: number;
  public sensors: HenHouseSensors;
}
