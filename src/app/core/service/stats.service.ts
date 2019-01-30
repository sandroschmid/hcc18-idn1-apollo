import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export class StatsService {

  public constructor(private readonly _state: StateService) {
  }

}
