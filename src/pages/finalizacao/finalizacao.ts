import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroDePacientePage } from '../cadastro-de-paciente/cadastro-de-paciente';
import { CadastroDeVacinaPage } from '../cadastro-de-vacina/cadastro-de-vacina';
import { ScannerDeVacinaPage } from '../scanner-de-vacina/scanner-de-vacina';
import { ScannerDeIdentidadePage } from '../scanner-de-identidade/scanner-de-identidade';
import { PaginaPrincipalPage } from '../pagina-principal/pagina-principal';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-finalizacao',
  templateUrl: 'finalizacao.html'
})
export class FinalizacaoPage {

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
  }goToScannerDeVacina(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeVacinaPage);
  }goToScannerDeIdentidade(params){
    if (!params) params = {};
    this.navCtrl.push(ScannerDeIdentidadePage);
  }goToPaginaPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PaginaPrincipalPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
