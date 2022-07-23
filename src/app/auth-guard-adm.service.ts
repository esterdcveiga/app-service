import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdmService implements CanActivate {

  constructor(private router:Router, private service:UsuarioService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    var x = this.service.getDadosToken()

    //console.log(this.getDadosToken().nome != '')
    let usuarioLogado: boolean = x.perfil == 'ADM'
    if(usuarioLogado){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
