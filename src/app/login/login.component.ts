import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UsuarioService) { }

  logar(dados:any):void{
    this.service.logar(dados).subscribe(data => {
      console.log(data)
      //transforma o objeto observable em string json
      let token = JSON.stringify(data)
      //transforma a string em objeto javascrip
      let x = JSON.parse(token)
      localStorage.setItem('userToken', x.token)
      //console.log(x.token)
      window.location.reload()
    })
    
  }

}
