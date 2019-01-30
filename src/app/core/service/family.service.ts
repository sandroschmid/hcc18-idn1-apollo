import { Injectable } from '@angular/core';
import { StateService } from './state.service';

@Injectable()
export class FamilyService {

  public constructor(private readonly _state: StateService) {
  }

}
