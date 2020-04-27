import { Component, OnInit } from '@angular/core';
import { EmprendimientoList } from "../../models/emprendimiento";
import { EmprendimientoService } from "../../services/emprendimiento.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-consultar-emprendimientos',
  templateUrl: './consultar-emprendimientos.component.html',
  styleUrls: ['./consultar-emprendimientos.component.scss'],
  providers:[EmprendimientoService]
})
export class ConsultarEmprendimientosComponent implements OnInit {
  public emprendimientos: EmprendimientoList[];


  constructor(
    private _emprendimientoService: EmprendimientoService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getEmprendimientos();
  }

  getEmprendimientos(){
    this._emprendimientoService.getEmprendimientos().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.emprendimientos = response;
          console.log(this.emprendimientos);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }

  deleteEmprendimiento(consecutivo, titulo){
    
    this._router.navigate(['/eliminar-emprendimientos/'+ consecutivo + '/'+ titulo ]);   
      
  }

}
