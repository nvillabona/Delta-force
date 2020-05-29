import { NgModule, ModuleWithProviders } from '@angular/core';
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
import { DetalleEmprendimientoComponent } from './components/detalle-emprendimiento/detalle-emprendimiento.component';
import { CrearEmprendimientoComponent } from './components/crear-emprendimiento/crear-emprendimiento.component';
import { CrearConsultoriaComponent } from './components/crear-consultoria/crear-consultoria.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ConsultarUsuariosComponent } from './components/consultar-usuarios/consultar-usuarios.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { EliminarEmprendimientoComponent } from "./components/eliminar-emprendimiento/eliminar-emprendimiento.component";
import { ActualizarEmprendimientoComponent } from "./components/actualizar-emprendimiento/actualizar-emprendimiento.component";
import { EliminarConsultoriaComponent } from "./components/eliminar-consultoria/eliminar-consultoria.component";
import { ActualizarConsultoriasComponent } from "./components/actualizar-consultorias/actualizar-consultorias.component";
import { ReportesConsultoriasComponent } from "./components/reportes-consultorias/reportes-consultorias.component";



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
    path: 'emprendedores/crear-emprendedor', component: CrearEmprendedorComponent /* Importo el componente para crear un emprendedor */
  },

  {
    path: 'emprendedores/actualizar-emprendedores/:cedula', component: ActualizarEmprendedoresComponent /* Importo componente para actualizar emprendedor*/
  },

  {
    path: 'emprendedores', component: EmprendedoresComponent /* Importo componente pagina principal emprendedores */
  },
  
  {
    path: 'emprendedores/eliminar-emprendedores/:cedula/:nombres/:apellidos', component: EliminarEmprendedorComponent /* Importo componente para eliminar emprendedores */
  },

  {
    path: 'consultores', component: ConsultoresComponent /* Importo componente de la pagina principal de consultores */
  },

  {
    path: 'consultores/actualizar-consultor/:cedula', component:ActualizarConsultorComponent /* Importo componente para actualizar consultores */
  },

  {
    path: 'consultores/eliminar-consultor/:cedula/:nombres/:apellidos', component: EliminarConsultorComponent /* Importo componente para eliminar consultores */
  },

  {
    path: 'consultar-consultorias', component: ConsultarConsultoriasComponent /* Importo componente para consultar consultorias programadas */
  },
  {
    path: 'consultar-consultorias/eliminar-consultorias/:consecutivo/:titulo', component: EliminarConsultoriaComponent /* Importo componente para consultar consultorias programadas */
  },
  {
    path: 'consultar-consultorias/actualizar-consultorias/:consecutivo', component: ActualizarConsultoriasComponent /* Importo componente para consultar consultorias programadas */
  },

  {
    path: 'consultar-emprendimientos', component: ConsultarEmprendimientosComponent  /* Importo componente para consultar emprendimientos */
  },

  {
    path: 'consultar-emprendimientos/eliminar-emprendimientos/:consecutivo/:titulo', component: EliminarEmprendimientoComponent  /* Importo componente para consultar emprendimientos */
  },
  
  {
    path: 'consultar-emprendimientos/actualizar-emprendimientos/:consecutivo', component: ActualizarEmprendimientoComponent
  },

  {
    path: 'consultores/crear-consultor', component: CrearConsultorComponent  /* Importo componente para crear consultor */
  },
  {
    path: 'consultar-consultorias/crear-consultoria', component: CrearConsultoriaComponent /* Importo componente para crear consultoría */
  },


  {
    path: 'consultar-emprendimientos/detalle-emprendimiento/:consecutivo', component: DetalleEmprendimientoComponent  /* Importo componente para ver el detalle de un emprendimiento */
  },

  {
    path: 'consultar-emprendimientos/crear-emprendimiento', component: CrearEmprendimientoComponent  /* Importo componente para crear un emprendimiento */
  },
  {
    path: 'consultar-usuarios', component: ConsultarUsuariosComponent  /* Importo consultar usuario */
  },
  {
    path: 'consultar-usuarios/crear-usuario', component: CrearUsuarioComponent  /* Importo consultar usuario */
  },
  {
    path: 'reportes-consultorias', component: ReportesConsultoriasComponent /* Importo reportes consultoría*/
  },
  
  { /* ¡¡ Debe ser siempre el ultimo !! */
    path: '**', component: Pagina404Component /* El path con '**' significa que cualquier URL desconocida se redirecciona al componente 'Login', aqui se puede colocar el componente de ERROR 404*/
  }

];

/* @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) */
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
