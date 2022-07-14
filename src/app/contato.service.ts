import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icontato } from './interfaces/Icontato';

//anotação injetable permite que esse componente possa ser injetado em outro
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  //injetando um cliente http
  constructor(private http:HttpClient) { }

  getContatos(){
    return this.http.get(`${environment.BASE_URL}contatos`)
  }
  save(data:any){
    return this.http.post(`${environment.BASE_URL}contatos`, data)
  }
  getUmContato(id:number){
    return this.http.get(`${environment.BASE_URL}contatos/${id}`)
  }
  alterarContato(dados:any){
    return this.http.put(`${environment.BASE_URL}contatos/${dados.id}`, dados)
  }
}


