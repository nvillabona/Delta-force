import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { LoginService } from "../../services/login.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-emprendimiento',
  templateUrl: './actualizar-emprendimiento.component.html',
  styleUrls: ['./actualizar-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService, LoginService]
})
export class ActualizarEmprendimientoComponent implements OnInit {
  public save_emprendimiento;
  public emprendimiento: Emprendimiento;
  public emprendedores:Emprendedor;
  public status:string;
  public url: string;
  public user: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
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
    this.getEmprendedores();
    this._route.params.subscribe(params=>{
      let consecutivo= params.consecutivo;
      this.getEmprendimiento(consecutivo);
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
  getEmprendimiento(consecutivo){
    this._emprendimientoService.getEmprendimiento(consecutivo).subscribe(
      response => {        
        this.emprendimiento = response;
        console.log(this.emprendimiento);
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
    
  onSubmit(form){
    console.log(this.emprendimiento);
    this._emprendimientoService.updateEmprendimiento(this.emprendimiento).subscribe(
      response => {
        if(response){
          this.save_emprendimiento = response;
          this.status = "failed";
          form.reset();
        }else {
          
          this.status = "success";
        }
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}

