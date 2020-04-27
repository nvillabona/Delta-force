import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Emprendimiento } from "../models/emprendimiento";
import { Emprendedor } from "../models/emprendedor";
import { LoginUsuario } from "../models/login.usuario";
import { Global } from "./global";

@Injectable()

export class EmprendimientoService{

    public url: string;

    filterEmprendimiento: '';

    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio de angular'
    }

    saveEmprendimiento(emprendimento: Emprendimiento): Observable<any>{

        let params = JSON.stringify(emprendimento);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'/emprendimientos', params, {headers: headers})
    }
    getEmprendimientos(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/emprendimientos', {headers:headers})
    }
    getEmprendedores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/emprendedores', {headers:headers})
    }
    deleteEmprendimiento(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.delete(this.url+'/emprendimientos/'+consecutivo, {headers:headers})
    }
    getEmprendimiento(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/emprendimientos/'+consecutivo, {headers: headers});
    }
    getEmprendimientoE(consecutivo): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/emprendimientos/getone/'+consecutivo, {headers: headers});
    }

    updateEmprendimiento(emprendimento:Emprendimiento): Observable<any>{
        let params = emprendimento;
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.put(this.url+'/emprendimientos/'+emprendimento.consecutivo, params, {headers:headers})
    }
    
}
