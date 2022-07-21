import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode"
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    var x = this.getDadosToken()

    //console.log(this.getDadosToken().nome != '')
    let usuarioLogado: boolean = x.perfil == 'ADM'
    if(usuarioLogado){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  getDadosToken(){
    var token = localStorage.getItem('userToken') || ''
    var bodyToken = jwt_decode(token)
    var jsonToken = JSON.stringify(bodyToken)
    var tokenDecodificado = JSON.parse(jsonToken)
    console.log(tokenDecodificado.nome)
    console.log(tokenDecodificado.email)
    console.log(tokenDecodificado.perfil)

    return tokenDecodificado

  }
}
