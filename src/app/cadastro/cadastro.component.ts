import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Icontato } from '../interfaces/Icontato';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private service: ContatoService) { }

  ngOnInit(): void {
  }

  contatos: Icontato[] = []

  msg:string =''
  saveContato(dados:any):void{
    //let contato:Icontato = {nome:'', idade:0, email:''}
    //contato.nome = dados.nome
    //contato.idade = dados.idade
    //contato.email = dados.email
    
    //this.contatos.push(contato)
    //console.log(this.contatos)

    this.service.save(dados).subscribe(data => this.msg = 'contato salvo')

  }

}
