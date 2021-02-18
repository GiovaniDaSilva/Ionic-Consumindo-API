import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MinhaAPIServiceService {

  constructor(private http : HttpClient) { }

  URL_API = "https://localhost:44317/"

  RetornarUsuarios(){    
    let url = this.URL_API + 'Listar';   
    return this.http.get(url).toPromise();
  }


  RetornarVersaoAPI(){
    let url = this.URL_API + 'Versao';   
    let versao = this.http.get(url).toPromise();
    return versao
  }

}
