import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch: 'full' /* El path vacio significa que es la primera en mostrarse, el redirectTo significa que si esta vacio lo redirecciona a ese componente */
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'pagina-principal', component: PaginaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
