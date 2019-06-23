import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CadastroDeVacinaPage } from '../pages/cadastro-de-vacina/cadastro-de-vacina';
import { LoginPage } from '../pages/login/login';
import { CadastroDePacientePage } from '../pages/cadastro-de-paciente/cadastro-de-paciente';
import { ScannerDeIdentidadePage } from '../pages/scanner-de-identidade/scanner-de-identidade';
import { ScannerDeVacinaPage } from '../pages/scanner-de-vacina/scanner-de-vacina';
import { FinalizacaoPage } from '../pages/finalizacao/finalizacao';
import { PaginaPrincipalPage } from '../pages/pagina-principal/pagina-principal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    CadastroDeVacinaPage,
    LoginPage,
    CadastroDePacientePage,
    ScannerDeIdentidadePage,
    ScannerDeVacinaPage,
    FinalizacaoPage,
    PaginaPrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroDeVacinaPage,
    LoginPage,
    CadastroDePacientePage,
    ScannerDeIdentidadePage,
    ScannerDeVacinaPage,
    FinalizacaoPage,
    PaginaPrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}