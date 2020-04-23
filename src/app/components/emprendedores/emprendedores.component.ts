import { Component, OnInit } from '@angular/core';
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";


@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.scss'],
  providers:[EmprendedorService]
  
})
export class EmprendedoresComponent implements OnInit {
  public emprendedores: Emprendedor[];

  constructor(
    private _emprededorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
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

  deleteEmprendedor(cedula, nombres, apellidos){
    
    this._router.navigate(['/eliminar-emprendedores/'+ cedula + '/'+ nombres + '/' + apellidos]);   
      
  }

}
