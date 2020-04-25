import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
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

  constructor(
    private _facilitadorService: FacilitadorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getFacilitadores();
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
