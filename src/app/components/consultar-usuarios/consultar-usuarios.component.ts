import { Component, OnInit } from '@angular/core';
import { AtencionUsuario } from "../../models/login.usuario";
import { LoginService } from "../../services/login.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-consultar-usuarios',
  templateUrl: './consultar-usuarios.component.html',
  styleUrls: ['./consultar-usuarios.component.scss'],
  providers:[LoginService]
})
export class ConsultarUsuariosComponent implements OnInit {
  public atenciones: AtencionUsuario[];

  constructor(
    private _atencinoService: LoginService,
    private _router: Router,
    private _route: ActivatedRoute,){

    }

  ngOnInit() {
    this.getAtencion();
  }


  
  getAtencion(){
    this._atencinoService.getAtenciones().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.atenciones = response;
          console.log(this.atenciones);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
