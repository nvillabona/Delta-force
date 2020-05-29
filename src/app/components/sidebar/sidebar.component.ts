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

  constructor(
    private _router: Router,
    private _loginService: LoginService
  ) { 

  }
  
  ngOnInit() {        
/*     const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');
    
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    }); */

  /*   this.getLogin(); */

  }

/*   getLogin(){
    this._loginService.login(this.logUsuario).subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.logUsuario = response;
          console.log(this.logUsuario);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  } */
  
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


  


}
