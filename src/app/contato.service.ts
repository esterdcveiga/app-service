import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//anotação injetable permite que esse componente possa ser injetado em outro
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  //injetando um cliente http
  constructor(private http:HttpClient) { }

  getContatos(){
    return this.http.get('http://localhost:3000/contatos')
  }
}


