import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; /* Importado manualmente */
import esLocale from '@fullcalendar/core/locales/es';
import { ConsultoriaCalendar } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { LoginService } from "../../services/login.service";
import { UsuarioLoggeado } from "../../models/login.usuario";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers:[ConsultoriaService, LoginService]
})
export class CalendarioComponent implements OnInit {
  public locales = [esLocale];
  public consultoria: ConsultoriaCalendar[];
  public eventSources: Array<any> = [];
  public user: string;

  calendarPlugins = [dayGridPlugin]; /* Importado manualmente */
  constructor(
    private _consultoriaService: ConsultoriaService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
 
    
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    
    this.getConsultoria()
    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');
    
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    });
  }

  exit(){
    Swal.fire({
     title: 'Estás saliendo',
     text: '¿Deseas salir?',
     icon: 'warning',
     confirmButtonText: 'Sí',
     cancelButtonText: 'No',
     confirmButtonColor: '#6d6e71',
     cancelButtonColor: '#f47920',
     showCancelButton: true
   }) 
/*     this._loginService.logout(); */
 }

  logOut(){
    this._loginService.logoutUser();
    this._router.navigate(['/login']); 
  }
  
  getConsultoria(){
    this._consultoriaService.getConsultoriasCalendar().subscribe(
      response =>{
        console.log(response); 
        this.eventSources = response
      },
      error => {
        console.log(error);
        
      }
    );
  }

  

  

}
