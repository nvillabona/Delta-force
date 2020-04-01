import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion'; /* Importado manualmente -- Importa animaciones de Bootstrap */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* Importado manualmente -- Importa animaciones de Bootstrap como el acordeon en este caso */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { CalendarioComponent } from './calendario/calendario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaPrincipalComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(), /* Añadido manualmente -- Importo animacion acordeon Bootstrap -- forRoot() para funcionar en toda la aplicacion */
    BrowserAnimationsModule /* Añadido manualmente -- Modulo para Animaciones Bootstrap */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
