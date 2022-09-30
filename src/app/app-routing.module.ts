import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ 
  { path : '', component: LoginComponent}, 
  { path: 'login', component: LoginComponent}, 
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuardService] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }