import { Component, OnInit } from '@angular/core';
import { AtencionUsuarioAdd } from "../../models/login.usuario";
import { Router, ActivatedRoute, Params} from "@angular/router";
import { LoginService } from "../../services/login.service";

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss'],
  providers: [LoginService]
})
export class CrearUsuarioComponent implements OnInit {
  public atencion: AtencionUsuarioAdd;
  public status:string;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _loginService: LoginService
  ) { 
    this.atencion= new AtencionUsuarioAdd(0,"","","","",0,"","","","","","","","123456","");
    this.status = "success"
  }
  
  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.atencion);
    this._loginService.saveAtencion(this.atencion).subscribe(
      response => {
        if(response.atencion){
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
