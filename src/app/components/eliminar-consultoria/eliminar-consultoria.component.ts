import { Component, OnInit } from '@angular/core';
import { ConsultoriaService } from "../../services/consultoria.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-consultoria',
  templateUrl: './eliminar-consultoria.component.html',
  styleUrls: ['./eliminar-consultoria.component.scss'],
  providers:[ConsultoriaService]
})
export class EliminarConsultoriaComponent implements OnInit {
  public titulo: string;
  public consecutivo: number;

  constructor(
    private _consultoriaService: ConsultoriaService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
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

  deleteConsultoria(consecutivo){
    this._consultoriaService.deleteConsultorias(consecutivo).subscribe(
      response => {
        if (response) {
          this._router.navigate(['/consultar-consultorias']);   
        }
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
