import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Emprendimiento } from "../models/emprendimiento";
import { Facilitador } from "../models/facilitador";
import { Emprendedor } from "../models/emprendedor";
import { Consultoria, ConsultoriaEF } from "../models/consultoria";
import { LoginUsuario } from "../models/login.usuario";
import { Global } from "./global";

@Injectable()

export class ConsultoriaService{

    public url: string;
    filterConsultoria: '';

    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio de angular'
    }

    saveConsultoria(consultoria: Consultoria): Observable<any>{

        let params = JSON.stringify(consultoria);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'/consultorias', params, {headers: headers})
    }
    getConsultorias(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/consultorias', {headers:headers})
    }
    getEmprendedores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/emprendedores', {headers:headers})
    }
    getFacilitadores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/facilitadores', {headers:headers})
    }
    deleteConsultorias(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.delete(this.url+'/consultorias/'+consecutivo, {headers:headers})
    }
    getConsultoria(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/consultorias/'+consecutivo, {headers: headers});
    }
    getConsultoriaE(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/consultorias/getone/'+consecutivo, {headers: headers});
    }

    updateConsultoria(consultoria:Consultoria): Observable<any>{
        let params = consultoria;
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.put(this.url+'/consultorias/'+consultoria.consecutivo, params, {headers:headers})
    }

    getConsultoriasCalendar(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/calendar', {headers:headers})
    }
    
}
