import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Image } from '../../../core/model/image';
import { ImageUploadModalData } from '../../../core/model/image-upload-modal-data';
import { UtilityService } from '../../../core/service/utility.service';
import { ImageUploadModalResult } from '../../../core/model/image-upload-modal-result';

@Component({
  selector: 'app-image-upload-modal',
  templateUrl: './image-upload-modal.component.html',
  styleUrls: ['./image-upload-modal.component.scss']
})
export class ImageUploadModalComponent implements OnInit {

  public readonly view: {
    file: File,
    imageUri: SafeUrl,
    removed: boolean
  } = {
    file: undefined,
    imageUri: undefined,
    removed: false
  };

  public constructor(private readonly _dialogRef: MatDialogRef<ImageUploadModalComponent>,
                     private readonly _domSanitizer: DomSanitizer,
                     private readonly _utility: UtilityService,
                     @Inject(MAT_DIALOG_DATA) private readonly _data: ImageUploadModalData) {
  }

  public ngOnInit(): void {
    if (this._data.image) {
      this.view.file = this._data.image.file;
      this.view.imageUri = this._data.image.uri;
    }
  }

  public async onFileUpload(event: any): Promise<void> {
    const files = event.target.files;
    if (files.length <= 0) {
      return;
    }

    this.view.file = files[0];
    const fileType = this.view.file.type;
    this.view.removed = false;
    if (fileType !== 'image/jpeg' && fileType !== 'image/png' && fileType !== 'image/gif') {
      this._utility.showMessage('Only "jpeg", "png" and "gif" images are allowed');
      return;
    } else {
      const uri = await this._utility.fileToDataUri(this.view.file);
      this.view.imageUri = this._domSanitizer.bypassSecurityTrustUrl(uri);
    }
  }

  public remove(): void {
    this.view.removed = true;
    this.view.file = undefined;
    this.view.imageUri = undefined;
  }

  public async onDone(): Promise<void> {
    const image = this.view.file && this.view.imageUri ? new Image(this.view.file, this.view.imageUri) : undefined;
    this._dialogRef.close(new ImageUploadModalResult(image, this.view.removed));
  }
}
