import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';


const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch: 'full' /* El path vacio significa que es la primera en mostrarse, el redirectTo significa que si esta vacio lo redirecciona a ese componente */
  },
  {
    path:'login', component: LoginComponent /* Importo componente "login" */
  },
  {
    path:'pagina-principal', component: PaginaPrincipalComponent /* Importo componente "pagina principal" */
  },
  {
    path:'calendario', component: CalendarioComponent /* Importo componente "calendario" */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
