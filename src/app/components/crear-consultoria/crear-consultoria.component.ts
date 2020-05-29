import { Component, OnInit } from '@angular/core';
import { Consultoria } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { HttpHeaders } from '@angular/common/http';
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-consultoria',
  templateUrl: './crear-consultoria.component.html',
  styleUrls: ['./crear-consultoria.component.scss'],
  providers:[ConsultoriaService, EmprendedorService, FacilitadorService, LoginService]
})
export class CrearConsultoriaComponent implements OnInit {
  public emprendedores:Emprendedor[];
  public facilitadores: Facilitador[];
  public consultoria: Consultoria;
  public status:string;
  public user: string;

  constructor(
    private _consultoriasService: ConsultoriaService,
    private _emprededorService: EmprendedorService,
    private _facilitadorService: FacilitadorService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.consultoria= new Consultoria(0, "", 0, 0, "", "", "", "", "");
    this.status = "success"
  }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this.getEmprendedores();
    this.getFacilitador();
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

  getFacilitador(){
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

  onSubmit(form){
    console.log(this.consultoria);
    this._consultoriasService.saveConsultoria(this.consultoria).subscribe(
      response => {
        if(response.consultoria){
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
