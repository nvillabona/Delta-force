import { Component, OnInit } from '@angular/core';
import { EmprendedorList, Emprendedor } from "../../models/emprendedor";
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
  public emprendedorList: EmprendedorList[];
  public status:string;

  constructor(
    private _emprededorService: EmprendedorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {
    this.status = "false";
   }

  ngOnInit() {
    this.getEmprendedores();
    

  }



  abrirPop(cedula, nombres, apellidos){
      this._emprededorService.getEmprendimiento(cedula).subscribe(
        response => {
          if(response.length > 0){
            
            console.log(response.length);
            
            this.emprendedorList = response;
            console.log(this.emprendedorList);
            this.status = "true";

            
          }else{

            this._router.navigate(['/emprendedores/eliminar-emprendedores/'+ cedula + '/'+ nombres + '/' + apellidos]);  
          }

        },
        error => {
          console.log(error);
        }
      );

    
  }

  cerrarPop(){
    this.status="false";
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
    
    this._router.navigate(['/emprendedores/eliminar-emprendedores/'+ cedula + '/'+ nombres + '/' + apellidos]);   
      
  }

}
