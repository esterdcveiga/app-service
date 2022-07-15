import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  produto={
    descricao: 'Feijão preto',
    preco: 8.9,
    validade: new Date(2022, 6, 15),
    data: new Date()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
