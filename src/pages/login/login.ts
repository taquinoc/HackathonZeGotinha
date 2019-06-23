import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { CadastroDePacientePage } from '../cadastro-de-paciente/cadastro-de-paciente';
import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { FinalizacaoPage } from '../finalizacao/finalizacao';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
  }goToCadastroDePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePacientePage);
  }goToCadastroDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeVacinaPage);
  }goToFinalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizacaoPage);
  }goToScannerDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeVacinaPage);
  }goToScannerDeIdentidade(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeIdentidadePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
