import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-consultor',
  templateUrl: './actualizar-consultor.component.html',
  styleUrls: ['./actualizar-consultor.component.scss'],
  providers:[FacilitadorService, LoginService]
})
export class ActualizarConsultorComponent implements OnInit {
  public facilitador: Facilitador;
  public save_facilitador;
  public status: string;
  public url: string;
  public user: string;

  constructor(
    private _facilitadorService: FacilitadorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 

    this.status = "success";
    this.url = Global.url;
  }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this._route.params.subscribe(params=>{
      let cedula= params.cedula;
      this.getFacilitador(cedula);  
    });

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

  getFacilitador(cedula){
    this._facilitadorService.getFacilitador(cedula).subscribe(
      response => {        
        this.facilitador = response;
        console.log(this.facilitador);
        
      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
  onSubmit(form){
    console.log(this.facilitador);
    this._facilitadorService.updateFacilitador(this.facilitador).subscribe(
      response => {
        if (response) {
          this.save_facilitador = response;
          console.log(this.save_facilitador);
          
          this.status = "failed";
        }else {
          this.status = "success"
          
        }
      },
      error => {
        console.log(<any>error);
        
      }
    );

  }

}
