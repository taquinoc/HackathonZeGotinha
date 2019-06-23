import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDePacientePage } from '../cadastro-de-paciente/cadastro-de-paciente';
import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { FinalizacaoPage } from '../finalizacao/finalizacao';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-pagina-principal',
  templateUrl: 'pagina-principal.html'
})
export class PaginaPrincipalPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastroDePaciente(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDePacientePage);
  }goToCadastroDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroDeVacinaPage);
  }goToFinalizacao(params){
    if (!params) params = {};
    this.navCtrl.push(FinalizacaoPage);
  }goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
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
