import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    
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
  }


}
