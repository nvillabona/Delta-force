import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid'; /* Importado manualmente */

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; /* Importado manualmente */
  constructor() { }

  ngOnInit() {
  }

}
