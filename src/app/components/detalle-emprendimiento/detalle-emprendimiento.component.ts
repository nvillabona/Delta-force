import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { EmprendimientoList } from "../../models/emprendimiento";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";


@Component({
  selector: 'app-detalle-emprendimiento',
  templateUrl: './detalle-emprendimiento.component.html',
  styleUrls: ['./detalle-emprendimiento.component.scss'],
  providers:[EmprendimientoService, EmprendedorService]
})
export class DetalleEmprendimientoComponent implements OnInit {
  public emprendimiento: EmprendimientoList;
  public emprendedores:Emprendedor;
  public url: string;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _emprededorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let consecutivo= params.consecutivo;
      this.getEmprendimiento(consecutivo);
    });
  }

  getEmprendimiento(consecutivo){
    this._emprendimientoService.getEmprendimientoE(consecutivo).subscribe(
      response => {        
        this.emprendimiento = response;
        console.log(this.emprendimiento);
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
  }

}
