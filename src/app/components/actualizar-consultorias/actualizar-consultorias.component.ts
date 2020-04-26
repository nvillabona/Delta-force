import { Component, OnInit } from '@angular/core';
import { Consultoria } from "../../models/consultoria";
import { ConsultoriaService } from "../../services/consultoria.service";
import { Emprendedor } from "../../models/emprendedor";
import { EmprendedorService } from "../../services/emprendedor.service";
import { Facilitador } from "../../models/facilitador";
import { FacilitadorService } from "../../services/facilitador.service";
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "../../services/global";

@Component({
  selector: 'app-actualizar-consultorias',
  templateUrl: './actualizar-consultorias.component.html',
  styleUrls: ['./actualizar-consultorias.component.scss'],
  providers:[ConsultoriaService, EmprendedorService, FacilitadorService]
})
export class ActualizarConsultoriasComponent implements OnInit {
  public save_consultoria;
  public emprendedores:Emprendedor;
  public facilitadores: Facilitador;
  public consultoria: Consultoria;
  public status:string;
  public url: string;


  
  constructor(
    private _consultoriasService: ConsultoriaService,
    private _emprededorService: EmprendedorService,
    private _facilitadorService: FacilitadorService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) { 
    this.status = "success"
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
      let consecutivo= params.consecutivo;
      this.getConsultoria(consecutivo);
    });
    this.getEmprendedores();
    this.getFacilitador();
  }

  getConsultoria(consecutivo){
    this._consultoriasService.getConsultoria(consecutivo).subscribe(
      response => {        
        this.consultoria = response;
        console.log(this.consultoria);
        

      },
      error => {
        console.log(<any>error);
        
      }
    );
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

  getFacilitador(){
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

  onSubmit(form){
    console.log(this.consultoria);
    this._consultoriasService.updateConsultoria(this.consultoria).subscribe(
      response => {
        if(response){
          this.save_consultoria = response;
          this.status = "failed";
          form.reset();
        }else {
          
          this.status = "success";
        }
        
      },
      error => {
        console.log(error);
        
      }
    );
    
  }

}
