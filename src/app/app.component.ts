import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-service';
  userLogado:any = this.service.getDadosToken()
  constructor(private service:UsuarioService){}

  logout():void{
    localStorage.removeItem('userToken')
    this.userLogado = ''
    window.location.reload()
  }
}
