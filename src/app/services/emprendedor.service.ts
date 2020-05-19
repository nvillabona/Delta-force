import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Emprendedor } from "../models/emprendedor";
import { LoginUsuario } from "../models/login.usuario";
import { Global } from "./global";

@Injectable()

export class EmprendedorService{

    public url: string;
    filterEmprendedor: '';


    constructor(
        private _http: HttpClient
    ){
        this.url= Global.url;
    }

    testService(){
        return 'probando servicio de angular'
    }

    saveEmprendedor(emprendedor: Emprendedor): Observable<any>{

        let params = JSON.stringify(emprendedor);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'/emprendedores', params, {headers: headers})
    }
    getEmprendedores(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/emprendedores', {headers:headers})
    }

    getEmprendimiento(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/emprendedores/empredimiento/'+cedula, {headers:headers})
    }

    deleteEmprendedor(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.delete(this.url+'/emprendedores/'+cedula, {headers:headers})
    }
    getEmprendedor(cedula): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.get(this.url+'/emprendedores/'+cedula, {headers: headers});
    }

    updateEmprendedor(emprendedor:Emprendedor): Observable<any>{
        let params = emprendedor;
        let headers = new HttpHeaders().set('Content-Type', 'application/json')
    
        return this._http.put(this.url+'/emprendedores/'+emprendedor.cedula_emprendedor, params, {headers:headers})
    }
    
}

