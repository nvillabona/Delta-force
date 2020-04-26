import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";

@Component({
  selector: 'app-actualizar-emprendimiento',
  templateUrl: './actualizar-emprendimiento.component.html',
  styleUrls: ['./actualizar-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService]
})
export class ActualizarEmprendimientoComponent implements OnInit {
  public save_emprendimiento;
  public emprendimiento: Emprendimiento;
  public emprendedores:Emprendedor;
  public status:string;
  public url: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.status = "success";
    this.url = Global.url;
  }

  ngOnInit() {
    this.getEmprendedores();
    this._route.params.subscribe(params=>{
      let consecutivo= params.consecutivo;
      this.getEmprendimiento(consecutivo);
    });
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
  getEmprendimiento(consecutivo){
    this._emprendimientoService.getEmprendimiento(consecutivo).subscribe(
      response => {        
        this.emprendimiento = response;
        console.log(this.emprendimiento);
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
    
  onSubmit(form){
    console.log(this.emprendimiento);
    this._emprendimientoService.updateEmprendimiento(this.emprendimiento).subscribe(
      response => {
        if(response){
          this.save_emprendimiento = response;
          this.status = "failed";
          form.reset();
        }else {
          
          this.status = "success";
        }
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}

