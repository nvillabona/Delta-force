import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginUsuario } from "../models/login.usuario";
import { Global } from "../services/global";

@Injectable()
export class LoginService {
    public url: string;
    

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    loginUsers(email,password){
        return this._http.get(this.url+"/users"+"/"+ email + "/"+password);
    }

    getUsers(){
        return this._http.get(this.url+"/users");
    }


}