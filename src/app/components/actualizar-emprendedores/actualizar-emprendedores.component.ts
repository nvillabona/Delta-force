import { Component, OnInit } from '@angular/core';
import { Emprendedor } from "../../models/emprendedor";
import { LoginUsuario } from "../../models/login.usuario";
import { EmprendedorService } from "../../services/emprendedor.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";

@Component({
  selector: 'app-actualizar-emprendedores',
  templateUrl: './actualizar-emprendedores.component.html',
  styleUrls: ['./actualizar-emprendedores.component.scss'],
  providers:[EmprendedorService]
})
export class ActualizarEmprendedoresComponent implements OnInit {
  public emprendedor: Emprendedor;
  public save_emprendedor;
  public status: string;
  public url: string;

  constructor(
    private _emprendedorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {

    this.status = "success";
    this.url = Global.url;
   }

  ngOnInit():void {
    this._route.params.subscribe(params=>{
      let cedula= params.cedula;
      this.getEmprendedor(cedula);
    });
  }

  getEmprendedor(cedula){
    this._emprendedorService.getEmprendedor(cedula).subscribe(
      response => {        
        this.emprendedor = response;

        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

  onSubmit(form){
    console.log(this.emprendedor);
    this._emprendedorService.updateEmprendedor(this.emprendedor).subscribe(
      response => {
        if (response) {
          this.save_emprendedor = response;
          this.status = "failed";
        }else {
          this.status = "success"
          
        }
      },
      error => {
        console.log(<any>error);
        
      }
    );

  }

}
