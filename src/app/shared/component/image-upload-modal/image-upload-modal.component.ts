import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Image } from '../../../core/model/image';
import { UtilityService } from '../../../core/service/utility.service';

@Component({
  selector: 'app-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.scss']
})
export class ImageUploadModalComponent {

  public readonly view: {
    file: File,
    imageUri: SafeUrl,
  } = {
    file: undefined,
    imageUri: undefined
  };

  public constructor(private readonly _dialogRef: MatDialogRef<ImageUploadModalComponent>,
                     private readonly _domSanitizer: DomSanitizer,
                     private readonly _utility: UtilityService) {
  }

  public async onFileUpload(event: any): Promise<void> {
    const files = event.target.files;
    if (files.length <= 0) {
      return;
    }

    this.view.file = files[0];
    const fileType = this.view.file.type;
    if (fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/gif') {
      this._utility.showMessage('Only "jpeg", "png" and "gif" images are allowed');
      return;
    } else {
      const uri = await this._utility.fileToDataUri(this.view.file);
      this.view.imageUri = this._domSanitizer.bypassSecurityTrustUrl(uri);
    }
  }

  public async onDone(): Promise<void> {
    this._dialogRef.close(new Image(this.view.file, this.view.imageUri));
  }

}
