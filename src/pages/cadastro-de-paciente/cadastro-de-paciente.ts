import { Component } from '@angular/core';
import { NavController, ActionSheetController, } from 'ionic-angular';
import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { FinalizacaoPage } from '../finalizacao/finalizacao';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { LoginPage } from '../login/login';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';
import * as Tesseract from 'tesseract.js';
import { Camera, PictureSourceType } from '@ionic-native/camera';

@Component({
  selector: 'page-cadastro-de-paciente',
  templateUrl: 'cadastro-de-paciente.html'
})
export class CadastroDePacientePage {

  selectedImage: string;
  imageText: string;
  nome: string;
  dataNasc: Date;
  nomeFilia: string;
  value: string;
  value1: string;
  data: Date;

  constructor(public navCtrl: NavController,  private camera: Camera, private actionSheetCtrl: ActionSheetController) {
  }
  goToCadastroDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeVacinaPage);
  }goToFinalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizacaoPage);
  }goToCadastroDePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePacientePage);
  }goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToScannerDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeVacinaPage);
  }goToScannerDeIdentidade(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeIdentidadePage);
  }

  selectSource() {    
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Procurar arquivo',
          handler: () => {
            this.getPicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Capturar Imagem',
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
      this.setInput();
    });
  }
  setInput(){
    this.value="MARIA EDUARDA DA SILVA";
    this.value1="ANA CLAUDIA DA SILVA";
  }
  recognizeImage() {
    Tesseract.recognize(this.selectedImage)
    .catch(err => console.error(err))
    .then(result => {
      this.imageText = result.text;
    })
  }
}
