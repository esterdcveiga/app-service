import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { EdicaoComponent } from './edicao/edicao.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes.component';
import { OutroUpperPipe } from './outro-upper.pipe';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    CadastroComponent,
    EdicaoComponent,
    LoginComponent,
    PipesComponent,
    OutroUpperPipe,
    CadastroUsuarioComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //importando o módulo http client para o projeto
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
