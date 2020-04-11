import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion'; /* Importado manualmente -- Importa animaciones de Bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* Importado manualmente -- Importa animaciones de Bootstrap como el acordeon en este caso */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { EliminarEmprendedorComponent } from './eliminar-emprendedor/eliminar-emprendedor.component';
// import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
// import { CrearEmprendedorComponent } from './crear-emprendedor/crear-emprendedor.component'; // for FullCalendar!


import { ActualizarEmprendedoresComponent } from './actualizar-emprendedores/actualizar-emprendedores.component';
import { ConsultarEmprenddedoresComponent } from './consultar-emprenddedores/consultar-emprenddedores.component';
import { EmprendedoresComponent } from './emprendedores/emprendedores.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent,

    EliminarEmprendedorComponent,
    // CalendarioComponent,
    // CrearEmprendedorComponent
    ActualizarEmprendedoresComponent,
    ConsultarEmprenddedoresComponent,
    EmprendedoresComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule, // for FullCalendar!
    AccordionModule.forRoot(), /* Añadido manualmente -- Importo animacion acordeon Bootstrap -- forRoot() para funcionar en toda la aplicacion */
    BrowserAnimationsModule /* Añadido manualmente -- Modulo para Animaciones Bootstrap */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
