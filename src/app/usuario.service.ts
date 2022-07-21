import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  save(dados:any){
    return this.http.post('http://localhost:8080/usuarios', dados)
  }
  logar(dados:any){
    return this.http.post('http://localhost:8080/usuarios/login', dados)
  }
}
