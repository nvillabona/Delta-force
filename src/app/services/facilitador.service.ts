import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Facilitador } from "../models/facilitador";
import { LoginUsuario } from "../models/login.usuario";
import { Global } from "./global";

@Injectable()

export class FacilitadorService{

    public url: string;
    filterConsultor: '';

    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio de angular'
    }

    saveFacilitador(facilitador: Facilitador): Observable<any>{

        let params = JSON.stringify(facilitador);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'/facilitadores', params, {headers: headers})
    }
    getFacilitadores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/facilitadores', {headers:headers})
    }
    deleteFacilitador(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.delete(this.url+'/facilitadores/'+cedula, {headers:headers})
    }
    getFacilitador(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/facilitadores/'+cedula, {headers: headers});
    }
    getConsultoria(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/facilitadores/consultoria/'+cedula, {headers:headers})
    }

    updateFacilitador(facilitador: Facilitador): Observable<any>{
        let params = facilitador;
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.put(this.url+'/facilitadores/'+facilitador.cedula_facilitador, params, {headers:headers})
    }
    
}

