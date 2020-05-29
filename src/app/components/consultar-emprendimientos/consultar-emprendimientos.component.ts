import { Component, OnInit } from '@angular/core';
import { EmprendimientoList } from "../../models/emprendimiento";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-emprendimientos',
  templateUrl: './consultar-emprendimientos.component.html',
  styleUrls: ['./consultar-emprendimientos.component.scss'],
  providers:[EmprendimientoService, LoginService]
})
export class ConsultarEmprendimientosComponent implements OnInit {
  public emprendimientos: EmprendimientoList[];
  public user: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this.getEmprendimientos();
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


  getEmprendimientos(){
    this._emprendimientoService.getEmprendimientos().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.emprendimientos = response;
          console.log(this.emprendimientos);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }

  deleteEmprendimiento(consecutivo, titulo){
    
    this._router.navigate(['/consultar-emprendimientos/eliminar-emprendimientos/'+ consecutivo + '/'+ titulo ]);   
      
  }

}
