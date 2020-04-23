import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AccordionModule } from 'ngx-bootstrap/accordion'; /* Importado manualmente -- Importa animaciones de Bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* Importado manualmente -- Importa animaciones de Bootstrap como el acordeon en este caso */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { EliminarEmprendedorComponent } from './components/eliminar-emprendedor/eliminar-emprendedor.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CrearEmprendedorComponent } from './components/crear-emprendedor/crear-emprendedor.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component"; // for FullCalendar!
import { ActualizarEmprendedoresComponent } from './components/actualizar-emprendedores/actualizar-emprendedores.component';
import { EmprendedoresComponent } from './components/emprendedores/emprendedores.component';
import { ConsultoresComponent } from './components/consultores/consultores.component';
import { ActualizarConsultorComponent } from './components/actualizar-consultor/actualizar-consultor.component';
import { EliminarConsultorComponent } from './components/eliminar-consultor/eliminar-consultor.component';
import { ConsultarConsultoriasComponent } from './components/consultar-consultorias/consultar-consultorias.component';
import { ConsultarEmprendimientosComponent } from './components/consultar-emprendimientos/consultar-emprendimientos.component';
import { DetalleEmprendimientoComponent } from './components/detalle-emprendimiento/detalle-emprendimiento.component';
import { CrearEmprendimientoComponent } from './components/crear-emprendimiento/crear-emprendimiento.component';
import { CrearConsultoriaComponent } from './components/crear-consultoria/crear-consultoria.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { CrearConsultorComponent } from "./components/crear-consultor/crear-consultor.component";





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    EliminarEmprendedorComponent,
    CalendarioComponent,
    CrearEmprendedorComponent,
    SidebarComponent,
    ActualizarEmprendedoresComponent,
    EmprendedoresComponent,
    ConsultoresComponent,
    ActualizarConsultorComponent,
    EliminarConsultorComponent,
    ConsultarConsultoriasComponent,
    ConsultarEmprendimientosComponent,
    CrearConsultorComponent,
    DetalleEmprendimientoComponent,
    CrearEmprendimientoComponent,
    CrearConsultoriaComponent,
    Pagina404Component,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule, // for FullCalendar!
    AccordionModule.forRoot(), /* Añadido manualmente -- Importo animacion acordeon Bootstrap -- forRoot() para funcionar en toda la aplicacion */
    BrowserAnimationsModule, /* Añadido manualmente -- Modulo para Animaciones Bootstrap */
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
