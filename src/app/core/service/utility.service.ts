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

  public fileToArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file');
      } else {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as ArrayBuffer);
        fileReader.onerror = (e) => reject(e);
        fileReader.onabort = (e) => reject(e);
        fileReader.readAsArrayBuffer(file);
      }
    });
  }

  public toFile(arrayBuffer: ArrayBuffer, mimeType: string, name: string = 'file'): File {
    return arrayBuffer && mimeType && name
      ? new File([new Blob([arrayBuffer], { type: mimeType })], name)
      : undefined;
  }

  public fileToDataUri(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No file');
      } else {
        const fileReader = new FileReader();
        fileReader.onload = () => resolve(fileReader.result as string);
        fileReader.onerror = (e) => reject(e);
        fileReader.onabort = (e) => reject(e);
        fileReader.readAsDataURL(file);
      }
    });
  }

  public arrayBufferToDataUri(arrayBuffer: ArrayBuffer, mimeType: string): Promise<string> {
    return arrayBuffer && mimeType
      ? this.fileToDataUri(this.toFile(arrayBuffer, mimeType))
      : undefined;
  }
}
