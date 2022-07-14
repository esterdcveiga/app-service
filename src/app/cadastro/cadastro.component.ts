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
    
    this.service.save(dados).subscribe(data => this.msg = 'contato salvo')

  }

}
