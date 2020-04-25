import { Component, OnInit } from '@angular/core';
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService  } from "../../services/facilitador.service";

@Component({
  selector: 'app-crear-consultor',
  templateUrl: './crear-consultor.component.html',
  styleUrls: ['./crear-consultor.component.scss'],
  providers: [FacilitadorService]
})
export class CrearConsultorComponent implements OnInit {
  public facilitador: Facilitador;
  public status: string;

  constructor(
    private _facilitadorService : FacilitadorService
  ) {
    this.facilitador= new Facilitador(0,"","","","",0,"","","facilitador","");
    this.status = "success"
   }

  ngOnInit() {
  }

  
  onSubmit(form){
    console.log(this.facilitador);
    this._facilitadorService.saveFacilitador(this.facilitador).subscribe(
      response => {
        if(response.emprendedor){
          this.status = "success";
          form.reset();
        }else {
          this.status = "failed";
        }
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}
