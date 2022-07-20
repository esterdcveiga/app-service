import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoComponent } from './edicao/edicao.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { UsuarioService } from './usuario.service';

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
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'usuario',
    component: CadastroUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
