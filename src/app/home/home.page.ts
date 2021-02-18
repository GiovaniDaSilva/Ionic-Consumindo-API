import { MinhaAPIServiceService } from './../services/minha-apiservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private minhaAPISrv : MinhaAPIServiceService) {
    this.BuscarVersaoAPI();
  }

  API_VERSAO : string
  Usuarios: any[] = [];

  BuscarUsuarios(){
    this.minhaAPISrv.RetornarUsuarios()
    .then (async (resposta : any[]) =>{ 
           
        this.Usuarios = resposta;
    })
    .catch (async (erro) =>{
      console.error(erro);
    })
  }

  BuscarVersaoAPI(){
    this.minhaAPISrv.RetornarVersaoAPI()
    .then (async (resposta : any) =>{      
        this.API_VERSAO = resposta.versao;
    })
    .catch (async (erro) =>{
      console.error(erro);
    })
  }
}
