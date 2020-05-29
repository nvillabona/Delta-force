import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { LoginService } from "../../services/login.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-emprendimiento',
  templateUrl: './crear-emprendimiento.component.html',
  styleUrls: ['./crear-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService, LoginService]
})
export class CrearEmprendimientoComponent implements OnInit {
  public emprendedores:Emprendedor[];
  public emprendimiento: Emprendimiento;
  public status:string;
  public user: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 

    this.emprendimiento= new Emprendimiento(0,"",0,"","","","","",0,"",0,0,"","","","","","","","");
    this.status = "success"
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

  
  onSubmit(form){
    console.log(this.emprendimiento);
    this._emprendimientoService.saveEmprendimiento(this.emprendimiento).subscribe(
      response => {
        if(response.emprendimiento){
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
