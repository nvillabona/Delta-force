import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SidebarComponent } from './components/sidebar/sidebar.component'; // for FullCalendar!
import { ActualizarEmprendedoresComponent } from './components/actualizar-emprendedores/actualizar-emprendedores.component';
import { ConsultarEmprenddedoresComponent } from './components/consultar-emprenddedores/consultar-emprenddedores.component';
import { EmprendedoresComponent } from './components/emprendedores/emprendedores.component';



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
