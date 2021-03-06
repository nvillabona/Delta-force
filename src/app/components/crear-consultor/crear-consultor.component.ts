import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService  } from "../../services/facilitador.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-consultor',
  templateUrl: './crear-consultor.component.html',
  styleUrls: ['./crear-consultor.component.scss'],
  providers: [FacilitadorService, LoginService]
})
export class CrearConsultorComponent implements OnInit {
  public facilitador: Facilitador;
  public status: string;
  public user:string;

  constructor(
    private _facilitadorService : FacilitadorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.facilitador= new Facilitador(0,"","","","",0,"","","facilitador","");
    this.status = "success"
   }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
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


  
  onSubmit(form){
    console.log(this.facilitador);
    this._facilitadorService.saveFacilitador(this.facilitador).subscribe(
      response => {
        if(response.emprendedor){
          this.status = "success";
          form.reset();
        }else {
          this.status = "failed";
        }
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}
