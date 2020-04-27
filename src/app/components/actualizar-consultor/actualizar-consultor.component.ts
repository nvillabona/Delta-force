import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";

@Component({
  selector: 'app-actualizar-consultor',
  templateUrl: './actualizar-consultor.component.html',
  styleUrls: ['./actualizar-consultor.component.scss'],
  providers:[FacilitadorService]
})
export class ActualizarConsultorComponent implements OnInit {
  public facilitador: Facilitador;
  public save_facilitador;
  public status: string;
  public url: string;

  constructor(
    private _facilitadorService: FacilitadorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 

    this.status = "success";
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let cedula= params.cedula;
      this.getFacilitador(cedula);
    });
  }

  getFacilitador(cedula){
    this._facilitadorService.getFacilitador(cedula).subscribe(
      response => {        
        this.facilitador = response;
        console.log(this.facilitador);
        
      },
      error => {
        console.log(<any>error);
        
      }
    );
  }
  onSubmit(form){
    console.log(this.facilitador);
    this._facilitadorService.updateFacilitador(this.facilitador).subscribe(
      response => {
        if (response) {
          this.save_facilitador = response;
          console.log(this.save_facilitador);
          
          this.status = "failed";
        }else {
          this.status = "success"
          
        }
      },
      error => {
        console.log(<any>error);
        
      }
    );

  }

}
