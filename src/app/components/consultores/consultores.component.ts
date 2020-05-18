import { Component, OnInit } from '@angular/core';
import { Facilitador, FacilitadorList } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-consultores',
  templateUrl: './consultores.component.html',
  styleUrls: ['./consultores.component.scss'],
  providers :[FacilitadorService]
})
export class ConsultoresComponent implements OnInit {
  public facilitadores: Facilitador[];
  public facilitadoresList: FacilitadorList[];
  public status:string;

  constructor(
    private _facilitadorService: FacilitadorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.status = "false";
  }

  ngOnInit() {
    this.getFacilitadores();
  }

  abrirPop(cedula, nombres, apellidos){
    this._facilitadorService.getConsultoria(cedula).subscribe(
      response => {
        if(response.length > 0){
          
          console.log(response.length);
          
          this.facilitadoresList = response;
          console.log(this.facilitadoresList);
          this.status = "true";

          
        }else{

          this._router.navigate(['/consultores/eliminar-consultor/'+ cedula + '/'+ nombres + '/' + apellidos]);   
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

  
  getFacilitadores(){
    this._facilitadorService.getFacilitadores().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.facilitadores = response;
          console.log(this.facilitadores);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }
  deleteFacilitador(cedula, nombres, apellidos){
    
    this._router.navigate(['/eliminar-consultor/'+ cedula + '/'+ nombres + '/' + apellidos]);   
      
  }
}
