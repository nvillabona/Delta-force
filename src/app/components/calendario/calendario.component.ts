import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; /* Importado manualmente */
import esLocale from '@fullcalendar/core/locales/es';
import { ConsultoriaCalendar } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers:[ConsultoriaService]
})
export class CalendarioComponent implements OnInit {
  public locales = [esLocale];
  public consultoria: ConsultoriaCalendar[];
  public eventSources: Array<any> = [];

  calendarPlugins = [dayGridPlugin]; /* Importado manualmente */
  constructor(
    private _consultoriaService: ConsultoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getConsultoria()
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
