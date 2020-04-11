import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CrearEmprendedorComponent } from './components/crear-emprendedor/crear-emprendedor.component';


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
  },
  {
    path:'crear-emprendedor', component: CrearEmprendedorComponent /* Importo el componente "crear-emprendedor" */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
