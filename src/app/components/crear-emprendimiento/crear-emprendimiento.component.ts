import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-crear-emprendimiento',
  templateUrl: './crear-emprendimiento.component.html',
  styleUrls: ['./crear-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService]
})
export class CrearEmprendimientoComponent implements OnInit {
  public emprendedores:Emprendedor[];
  public emprendimiento: Emprendimiento;
  public status:string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 

    this.emprendimiento= new Emprendimiento(0,"",0,"","","","","",0,"",0,0,"","","","","","","","");
    this.status = "success"
  }

  ngOnInit() {
    this.getEmprendedores();
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

  
  onSubmit(form){
    console.log(this.emprendimiento);
    this._emprendimientoService.saveEmprendimiento(this.emprendimiento).subscribe(
      response => {
        if(response.emprendimiento){
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
