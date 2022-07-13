import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icontato } from './interfaces/Icontato';

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
  save(data:any){
    return this.http.post('http://localhost:3000/contatos', data)
  }
  getUmContato(id:number){
    return this.http.get(`http://localhost:3000/contatos/${id}`)
  }
  alterarContato(dados:any){
    return this.http.put(`http://localhost:3000/contatos/${dados.id}`, dados)
  }
}


