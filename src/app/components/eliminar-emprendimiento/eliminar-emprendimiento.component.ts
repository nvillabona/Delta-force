import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-emprendimiento',
  templateUrl: './eliminar-emprendimiento.component.html',
  styleUrls: ['./eliminar-emprendimiento.component.scss'],
  providers:[EmprendimientoService, LoginService]
})
export class EliminarEmprendimientoComponent implements OnInit {
  public titulo: string;
  public consecutivo: number;
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
    this._route.params.subscribe((params:Params)=>{
      this.titulo= params.titulo;
      this.consecutivo = params.consecutivo;
      console.log(params);
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


  deleteEmprendimiento(consecutivo){
    this._emprendimientoService.deleteEmprendimiento(consecutivo).subscribe(
      response => {
        if (response) {
          this._router.navigate(['/consultar-emprendimientos']);   
        }
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
