import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {
  idContato: number = 0
  contato: any = {}
  constructor(private route: ActivatedRoute, private service: ContatoService) { }


  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    this.idContato = Number(routeParams.get('idContato'))

    //o retorno de getUmContato é um observable que tem sua resposta assinada pelo subscribe, recebida essa resposta, ela será passada para o paêmetro data, que recebe o resultado da consulta
    this.service.getUmContato(this.idContato).subscribe(data => {
      this.contato = data
      console.log(this.contato)
    }
    )
  }

  msg: string = ''
  efetivarAlteracao(): void {
    this.service.alterarContato(this.contato).subscribe(data => this.msg = 'contato alterado')
  }


}
