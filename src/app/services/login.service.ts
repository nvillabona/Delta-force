import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { LoginUsuario, AtencionUsuario, AtencionUsuarioAdd } from "../models/login.usuario";
import { Global } from "../services/global";
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    public url: string;
    public resultado;
    public emailRes:string;
    public loggedUser;
    public loggedIn: boolean;

    filtroUser: '';


    constructor(
        private _http: HttpClient,
        private router: Router
    ){
        this.url = Global.url;

    }

    login(user: LoginUsuario) {
        if (user.email !== '' && user.password !== '' ) {
          this.loggedUser= user;
          this.loggedIn = true;
          this.router.navigate(['/calendario']);

          return this.loggedUser;
        }
      }

      getLogin(){
        return this.loggedUser;
      }

      logout() {
        this.loggedIn = false;
        this.router.navigate(['/login']);
        return this.loggedIn;
      }

    loginUsers(email,password){
        this.resultado = this._http.get(this.url+"/users"+"/"+ email + "/"+password);
        this.emailRes = this.resultado.email;
         return this.resultado
    } 

    dentro(){
        return this.emailRes;
    }

    getUsers(){
        return this._http.get(this.url+"/users");
    }

    getAtenciones(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/atencion', {headers:headers})
    }
    saveAtencion(atencion: AtencionUsuarioAdd): Observable<any>{

        let params = JSON.stringify(atencion);
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url+'/atencion', params, {headers: headers})
    }

}