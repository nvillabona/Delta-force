import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-consultor',
  templateUrl: './eliminar-consultor.component.html',
  styleUrls: ['./eliminar-consultor.component.scss'],
  providers :[FacilitadorService]
})
export class EliminarConsultorComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public cedula: number;

  constructor(
    private _facilitadorService: FacilitadorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.nombre = params.nombres;
      this.apellido= params.apellidos;
      this.cedula = params.cedula;
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
deleteFacilitador(cedulaF){
  this._facilitadorService.deleteFacilitador(cedulaF).subscribe(
    response => {
      if (response) {
        this._router.navigate(['/consultores']);   
      }
    },
    error => {
      console.log(error);
      
    }
  );


    
}

}
