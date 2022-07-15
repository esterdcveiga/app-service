import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    canActivate:[AuthGuardService]
    
  },
  {
    path: 'contato/:idContato',
    component: EdicaoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
