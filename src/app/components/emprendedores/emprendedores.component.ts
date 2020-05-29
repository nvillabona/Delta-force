import { Component, OnInit } from '@angular/core';
import { EmprendedorList, Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.scss'],
  providers:[EmprendedorService, LoginService]
  
})
export class EmprendedoresComponent implements OnInit {
  public emprendedores: Emprendedor[];
  public emprendedorList: EmprendedorList[];
  public status:string;
  public user:string;

  constructor(
    private _emprededorService: EmprendedorService,
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
    this.getEmprendedores();
    
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


  abrirPop(cedula, nombres, apellidos){
      this._emprededorService.getEmprendimiento(cedula).subscribe(
        response => {
          if(response.length > 0){
            
            console.log(response.length);
            
            this.emprendedorList = response;
            console.log(this.emprendedorList);
            this.status = "true";

            
          }else{

            this._router.navigate(['/emprendedores/eliminar-emprendedores/'+ cedula + '/'+ nombres + '/' + apellidos]);  
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

  getEmprendedores(){
    this._emprededorService.getEmprendedores().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.emprendedores = response;
          console.log(this.emprendedores);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }

  deleteEmprendedor(cedula, nombres, apellidos){
    
    this._router.navigate(['/emprendedores/eliminar-emprendedores/'+ cedula + '/'+ nombres + '/' + apellidos]);   
      
  }


}
