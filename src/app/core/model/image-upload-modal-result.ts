import { Image } from './image';

export class ImageUploadModalResult {
  public constructor(readonly image: Image,
                     readonly removed: boolean) {
  }
}
