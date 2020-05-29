import { Component, OnInit } from '@angular/core';
import { AtencionUsuarioAdd } from "../../models/login.usuario";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { LoginService } from "../../services/login.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
  providers: [LoginService]
})
export class CrearUsuarioComponent implements OnInit {
  public atencion: AtencionUsuarioAdd;
  public status:string;
  public user: string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _loginService: LoginService
  ) { 
    this.atencion= new AtencionUsuarioAdd(0,"","","","",0,"","","","","","","","123456","");
    this.status = "success"
  }
  
  ngOnInit() {
    this.user = this._loginService.getCurrentUser();
    if (!this.user) {
      this._router.navigate(['/login']); 
    }
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


  onSubmit(form){
    console.log(this.atencion);
    this._loginService.saveAtencion(this.atencion).subscribe(
      response => {
        if(response.atencion){
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
