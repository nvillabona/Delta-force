import { Component, OnInit } from '@angular/core';
import { Emprendedor } from "../../models/emprendedor";
import { LoginUsuario } from "../../models/login.usuario";
import { EmprendedorService } from "../../services/emprendedor.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-emprendedor',
  templateUrl: './crear-emprendedor.component.html',
  styleUrls: ['./crear-emprendedor.component.scss'],
  providers:[EmprendedorService]
})
export class CrearEmprendedorComponent implements OnInit {

  public title: string;
  public emprendedor: Emprendedor;
  public status: string;

  constructor(
    private _emprendedorService: EmprendedorService
  ) { 
    this.title = "Crear Emprendedores";
    this.emprendedor= new Emprendedor(0,'','','','','','', 0, '', '',0,'','','emprendedor');
    this.status = "success"
  }

  ngOnInit() {
    
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

  onSubmit(form){
    console.log(this.emprendedor);
    this._emprendedorService.saveEmprendedor(this.emprendedor).subscribe(
      response => {
        if(response.emprendedor){
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
