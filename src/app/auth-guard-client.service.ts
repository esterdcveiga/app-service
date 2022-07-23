import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardClientService implements CanActivate{

  constructor(private router:Router, private service:UsuarioService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var t = this.service.getDadosToken()
    //t.perfil == 'CLIENTE'
    if (t.perfil == 'CLIENTE') {
      return true
    } else {
      this.router.navigate(['/errors'])
      return false
    }
  }
}
