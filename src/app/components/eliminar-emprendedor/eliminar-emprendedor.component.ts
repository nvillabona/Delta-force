import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-eliminar-emprendedor',
  templateUrl: './eliminar-emprendedor.component.html',
  styleUrls: ['./eliminar-emprendedor.component.scss'],
  providers:[EmprendedorService]
})
export class EliminarEmprendedorComponent implements OnInit {
  public nombre: string;
  public apellido: string;
  public cedula: number;

  constructor(
    private _emprededorService: EmprendedorService,
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
  }
  deleteEmprendedor(cedulaE){
    this._emprededorService.deleteEmprendedor(cedulaE).subscribe(
      response => {
        if (response) {
          this._router.navigate(['/emprendedores']);   
        }
      },
      error => {
        console.log(error);        
      }
    );


      
  }

}
