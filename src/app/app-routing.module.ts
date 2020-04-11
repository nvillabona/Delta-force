import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { CrearEmprendedorComponent } from './crear-emprendedor/crear-emprendedor.component';
import { ActualizarEmprendedoresComponent } from './actualizar-emprendedores/actualizar-emprendedores.component';
import { ConsultarEmprenddedoresComponent } from './consultar-emprenddedores/consultar-emprenddedores.component';
import { EmprendedoresComponent } from './emprendedores/emprendedores.component';



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
   },
   {
    path:'pagina-principal', component: PaginaPrincipalComponent
  },
  {
    path:'actualizar-emprendedores', component: ActualizarEmprendedoresComponent /* Importo componente "ActualizarEmprendedores" */
  },
  {
    path:'consultar-emprendedores', component: ConsultarEmprenddedoresComponent /* Importo componente "ConsultarEmprenddedores" */
  },
  {
    path:'emprendedores', component: EmprendedoresComponent /* Importo componente "ConsultarEmprenddedores" */
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
