import { Component, OnInit, RootRenderer } from '@angular/core';
import { Consultoria } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-consultar-consultorias',
  templateUrl: './consultar-consultorias.component.html',
  styleUrls: ['./consultar-consultorias.component.scss'],
  providers:[ConsultoriaService]
})
export class ConsultarConsultoriasComponent implements OnInit {
  public consultorias: Consultoria[];
  public tamaño: number;

  constructor(
    private _consultoriaService: ConsultoriaService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getConsultoria();
  }

  getConsultoria(){
    this._consultoriaService.getConsultorias().subscribe(
      response =>{
        console.log(response);
        if(response){
        
          this.consultorias = response;
          this.tamaño= response.lenght;
          console.log(this.consultorias);
          console.log(this.tamaño);
          
        }else{
          
        }
 
      },
      error => {
        console.log(error);
        
      }
    );
  }
  deleteConsultorias(consecutivo, titulo){
    
    this._router.navigate(['/eliminar-consultorias/'+ consecutivo + '/'+ titulo ]);   
      
  }

}
