import { Component, OnInit } from '@angular/core';
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";


@Component({
  selector: 'app-emprendedores',
  templateUrl: './emprendedores.component.html',
  styleUrls: ['./emprendedores.component.scss'],
  providers:[EmprendedorService]
  
})
export class EmprendedoresComponent implements OnInit {
  public emprendedores: Emprendedor[];

  constructor(
    private _emprededorService: EmprendedorService
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

}
