import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { EmprendimientoList } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { LoginService } from "../../services/login.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-detalle-emprendimiento',
  templateUrl: './detalle-emprendimiento.component.html',
  styleUrls: ['./detalle-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService,LoginService]
})
export class DetalleEmprendimientoComponent implements OnInit {
  public emprendimiento: EmprendimientoList;
  public emprendedores:Emprendedor;
  public url: string;
  public user: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
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

  getEmprendimiento(consecutivo){
    this._emprendimientoService.getEmprendimientoE(consecutivo).subscribe(
      response => {        
        this.emprendimiento = response;
        console.log(this.emprendimiento);
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
