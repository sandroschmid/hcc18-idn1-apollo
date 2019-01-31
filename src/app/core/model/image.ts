import { SafeUrl } from '@angular/platform-browser';

export class Image {
  public constructor(
    public readonly file: File,
    public readonly uri: SafeUrl
  ) {
  }
}
