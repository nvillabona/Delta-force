import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; /* Importado manualmente */
import esLocale from '@fullcalendar/core/locales/es';
import { ConsultoriaCalendar } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers:[ConsultoriaService]
})
export class CalendarioComponent implements OnInit {
  public locales = [esLocale];

  calendarPlugins = [dayGridPlugin]; /* Importado manualmente */
  constructor(
    private _consultoriaService: ConsultoriaService
  ) { }

  ngOnInit() {
  }

}
