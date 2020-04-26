import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginUsuario } from "../../models/login.usuario";
import { Router} from "@angular/router";
import { LoginService } from "../../services/login.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [LoginService]
})
export class SidebarComponent implements OnInit {
  public logUsuario: LoginUsuario;
  public user: string;

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { 

  }
  
  ngOnInit() {

    this.user = this._loginService.dentro();
    console.log(this.user);
    
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
  }

  


}
