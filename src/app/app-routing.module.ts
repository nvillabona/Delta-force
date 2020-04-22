import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { CrearEmprendedorComponent } from './components/crear-emprendedor/crear-emprendedor.component';
import { ActualizarEmprendedoresComponent } from './components/actualizar-emprendedores/actualizar-emprendedores.component';
import { EmprendedoresComponent } from './components/emprendedores/emprendedores.component';
import { EliminarEmprendedorComponent } from './components/eliminar-emprendedor/eliminar-emprendedor.component';
import { ConsultoresComponent } from './components/consultores/consultores.component';
import { ActualizarConsultorComponent } from './components/actualizar-consultor/actualizar-consultor.component';
import { EliminarConsultorComponent } from './components/eliminar-consultor/eliminar-consultor.component';
import { ConsultarConsultoriasComponent } from './components/consultar-consultorias/consultar-consultorias.component';
import { ConsultarEmprendimientosComponent } from './components/consultar-emprendimientos/consultar-emprendimientos.component';
import { CrearConsultorComponent } from './components/crear-consultor/crear-consultor.component';

/* Aqui se enlazan los componentes con una ruta en especifica para la pagina web */
const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full' /* El path vacio significa que es la primera en mostrarse, el redirectTo significa que si esta vacio lo redirecciona a ese componente */
  },

  {
    path: 'login', component: LoginComponent /* Importo componente del login */
  },

  {
    path: 'pagina-principal', component: PaginaPrincipalComponent /* Importo componente de la pagina principal */
  },

  {
    path: 'calendario', component: CalendarioComponent /* Importo componente del calendario */
  },

  {
    path: 'crear-emprendedor', component: CrearEmprendedorComponent /* Importo el componente para crear un emprendedor */
  },

  {
    path: 'actualizar-emprendedores', component: ActualizarEmprendedoresComponent /* Importo componente para actualizar emprendedor*/
  },

  {
    path: 'emprendedores', component: EmprendedoresComponent /* Importo componente pagina principal emprendedores */
  },
  
  {
    path: 'eliminar-emprendedores/:cedula/:nombres/:apellidos', component: EliminarEmprendedorComponent /* Importo componente para eliminar emprendedores */
  },

  {
    path: 'consultores', component: ConsultoresComponent /* Importo componente de la pagina principal de consultores */
  },

  {
    path: 'actualizar-consultor', component:ActualizarConsultorComponent /* Importo componente para actualizar consultores */
  },

  {
    path: 'eliminar-consultor', component: EliminarConsultorComponent /* Importo componente para eliminar consultores */
  },

  {
    path: 'consultar-consultorias', component: ConsultarConsultoriasComponent /* Importo componente para consultar consultorias programadas */
  },

  {
    path: 'consultar-emprendimientos', component: ConsultarEmprendimientosComponent  /* Importo componente para consultar emprendimientos */
  },

  {
    path: 'crear-consultor', component: CrearConsultorComponent  /* Importo componente para crear consultor */
  },

  { /* ¡¡ Debe ser siempre el ultimo !! */
    path: '**', component: LoginComponent /* El path con '**' significa que cualquier URL desconocida se redirecciona al componente 'Login', aqui se puede colocar el componente de ERROR 404*/
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
