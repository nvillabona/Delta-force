import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { LoginUsuario, AtencionUsuario, AtencionUsuarioAdd, UsuarioLoggeado } from "../models/login.usuario";
import { Global } from "../services/global";
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
    public url: string;
    public resultado;
    public UserLogin: string;
    public idLogin: number;
/*     public loggedUser;
    public loggedIn: boolean; */

    filterUser: '';


    constructor(
        private _http: HttpClient,
        private router: Router
    ){
        this.url = Global.url;

    }

/*     login(user: LoginUsuario) {
        if (user.email !== '' && user.password !== '' ) {
          this.loggedUser= user;
          this.loggedIn = true;
          this.router.navigate(['/calendario']);

          return this.loggedUser;
        }
      } */
/* 
      getLogin(){
        return this.loggedUser;
      }

      logout() {
        this.loggedIn = false;
        this.router.navigate(['/login']);
        return this.loggedIn;
      } */

    loginUsers(email,password){
        this.resultado = this._http.get(this.url+"/users"+"/"+ email + "/"+password);

         return this.resultado
    }
    setUser(user:UsuarioLoggeado){
      this.UserLogin = JSON.stringify(user);
      console.log(this.UserLogin);
      
      let user_email = user.email;
      localStorage.setItem("currentUser", this.UserLogin);
    } 
    setToken(token): void {
      localStorage.setItem("accessToken", token);
    }
    setRol(rol): void {
      localStorage.setItem("rol", rol);
    }

    getToken() {
      return localStorage.getItem("accessToken");
    }
    getCurrentUser() {
      let user_string = localStorage.getItem("currentUser");
      let user_id = localStorage.getItem("accessToken");
      let user_rol = localStorage.getItem("rol");
      if (user_string) {
        let user = user_string;
        console.log(user);
        
        return user;        
      } else {
        return null;
      }
    }
    getCurrentToken() {
      let user_id = localStorage.getItem("accessToken");
      if (user_id) {
        let id = user_id;
        console.log(id);
        
        return id;        
      } else {
        return null;
      }
    }

    getCurrentRol() {
      let user_rol = localStorage.getItem("rol");
      if (user_rol) {
        let rol = user_rol;
        console.log(rol);
        
        return rol;        
      } else {
        return null;
      }
    }

    logoutUser() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("rol");
      return "Sesion cerrada";
    }

/*     dentro(){
        return this.emailRes;
    }
 */
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