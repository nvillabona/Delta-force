import { Component, OnInit } from '@angular/core';
import { Facilitador, FacilitadorList } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { LoginService } from "../../services/login.service";
import Swal from 'sweetalert2';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-consultores',
  templateUrl: './consultores.component.html',
  styleUrls: ['./consultores.component.scss'],
  providers :[FacilitadorService, LoginService]
})
export class ConsultoresComponent implements OnInit {
  public facilitadores: Facilitador[];
  public facilitadoresList: FacilitadorList[];
  public status:string;
  public menu: string;
  public user: string;

  constructor(
    private _facilitadorService: FacilitadorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.status = "false";
  }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this.getFacilitadores();
    const $button  = document.querySelector('#sidebar-toggle');
    const $wrapper = document.querySelector('#wrapper');
    
    $button.addEventListener('click', (e) => {
      e.preventDefault();
      $wrapper.classList.toggle('toggled');
    });

  }

  abrirPop(cedula, nombres, apellidos){
    this._facilitadorService.getConsultoria(cedula).subscribe(
      response => {
        if(response.length > 0){
          
          console.log(response.length);
          
          this.facilitadoresList = response;
          console.log(this.facilitadoresList);
          this.status = "true";

          
        }else{

          this._router.navigate(['/consultores/eliminar-consultor/'+ cedula + '/'+ nombres + '/' + apellidos]);   
        }

      },
      error => {
        console.log(error);
      }
    );

  
}

cerrarPop(){
  this.status="false";
}

  
  getFacilitadores(){
    this._facilitadorService.getFacilitadores().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.facilitadores = response;
          console.log(this.facilitadores);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }
  deleteFacilitador(cedula, nombres, apellidos){
    
    this._router.navigate(['/eliminar-consultor/'+ cedula + '/'+ nombres + '/' + apellidos]);   
      
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

}
