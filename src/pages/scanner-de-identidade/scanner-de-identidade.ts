import { Component } from '@angular/core';
import { NavController, ActionSheetController, } from 'ionic-angular';
import * as Tesseract from 'tesseract.js';
import { Camera, PictureSourceType } from '@ionic-native/camera';

@Component({
  selector: 'page-scanner-de-identidade',
  templateUrl: 'scanner-de-identidade.html'
})
export class ScannerDeIdentidadePage {

  selectedImage: string;
  imageText: string;
 
  constructor(public navCtrl: NavController, private camera: Camera, private actionSheetCtrl: ActionSheetController) {
  }
 
  selectSource() {    
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Use Library',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capture Image',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
 
  getPicture(sourceType: PictureSourceType) {
    this.camera.getPicture({
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      saveToPhotoAlbum: false,
      correctOrientation: true
    }).then((imageData) => {
      this.selectedImage = `data:image/jpeg;base64,${imageData}`;
    });
  }
 
  recognizeImage() {
    Tesseract.recognize(this.selectedImage)
    .catch(err => console.error(err))
    .then(result => {
      this.imageText = result.text;
    })
  }
}
