import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UtilityService {

  private static readonly DEFAULT_SNACK_BAR_DURATION = 1000;

  public constructor(private readonly _snackBar: MatSnackBar) {
  }

  public showMessage(message: string, duration?: number) {
    this._snackBar.open(message, 'OK', { duration: duration || UtilityService.DEFAULT_SNACK_BAR_DURATION });
  }
}
