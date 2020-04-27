import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from "../../models/emprendimiento";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-eliminar-emprendimiento',
  templateUrl: './eliminar-emprendimiento.component.html',
  styleUrls: ['./eliminar-emprendimiento.component.scss'],
  providers:[EmprendimientoService]
})
export class EliminarEmprendimientoComponent implements OnInit {
  public titulo: string;
  public consecutivo: number;

  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.titulo= params.titulo;
      this.consecutivo = params.consecutivo;
      console.log(params);
  });
  }

  deleteEmprendimiento(consecutivo){
    this._emprendimientoService.deleteEmprendimiento(consecutivo).subscribe(
      response => {
        if (response) {
          this._router.navigate(['/consultar-emprendimientos']);   
        }
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
