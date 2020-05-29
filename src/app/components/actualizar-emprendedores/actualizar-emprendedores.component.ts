import { Component, OnInit } from '@angular/core';
import { Emprendedor } from "../../models/emprendedor";
import { LoginUsuario } from "../../models/login.usuario";
import { EmprendedorService } from "../../services/emprendedor.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-emprendedores',
  templateUrl: './actualizar-emprendedores.component.html',
  styleUrls: ['./actualizar-emprendedores.component.scss'],
  providers:[EmprendedorService, LoginService]
})
export class ActualizarEmprendedoresComponent implements OnInit {
  public emprendedor: Emprendedor;
  public save_emprendedor;
  public status: string;
  public url: string;
  public user: string;

  constructor(
    private _emprendedorService: EmprendedorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {

    this.status = "success";
    this.url = Global.url;
   }

  ngOnInit():void {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this._route.params.subscribe(params=>{
      let cedula= params.cedula;
      this.getEmprendedor(cedula);
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

  getEmprendedor(cedula){
    this._emprendedorService.getEmprendedor(cedula).subscribe(
      response => {        
        this.emprendedor = response;
        console.log(this.emprendedor)
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

  onSubmit(form){
    console.log(this.emprendedor);
    this._emprendedorService.updateEmprendedor(this.emprendedor).subscribe(
      response => {
        if (response) {
          this.save_emprendedor = response;
          console.log(this.save_emprendedor);
          
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
