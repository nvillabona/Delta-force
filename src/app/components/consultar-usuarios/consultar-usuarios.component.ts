import { Component, OnInit } from '@angular/core';
import { AtencionUsuario } from "../../models/login.usuario";
import { LoginService } from "../../services/login.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.scss'],
  providers:[LoginService]
})
export class ConsultarUsuariosComponent implements OnInit {
  public atenciones: AtencionUsuario[];
  public user: string;

  constructor(
    private _atencinoService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,){

    }

  ngOnInit() {
    this.user = this._atencinoService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this.getAtencion();
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
  this._atencinoService.logoutUser();
  this._router.navigate(['/login']); 
}

  
  getAtencion(){
    this._atencinoService.getAtenciones().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.atenciones = response;
          console.log(this.atenciones);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
