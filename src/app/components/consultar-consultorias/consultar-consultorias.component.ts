import { Component, OnInit, RootRenderer } from '@angular/core';
import { Consultoria } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { LoginService } from "../../services/login.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consultar-consultorias',
  templateUrl: './consultar-consultorias.component.html',
  styleUrls: ['./consultar-consultorias.component.scss'],
  providers:[ConsultoriaService, LoginService]
})
export class ConsultarConsultoriasComponent implements OnInit {
  public consultorias: Consultoria[];
  public tamaño: number;
  public user: string;

  constructor(
    private _consultoriaService: ConsultoriaService,
    private _loginService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
    this.getConsultoria();
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


  getConsultoria(){
    this._consultoriaService.getConsultorias().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.consultorias = response;
          this.tamaño= response.lenght;
          console.log(this.consultorias);
          console.log(this.tamaño);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }
  deleteConsultorias(consecutivo, titulo){
    
    this._router.navigate(['/consultar-consultorias/eliminar-consultorias/'+ consecutivo + '/'+ titulo ]);   
      
  }

}
