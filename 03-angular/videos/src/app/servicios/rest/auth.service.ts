import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Raza} from "../../interfaces/raza";
import {map} from "rxjs/operators";
import {Observable, ObservableInput} from "rxjs";


@Injectable()
export class AuthService{
  usuario;

  constructor(private readonly _httpClient: HttpClient){

  }

  login(username:string, password: string){
    const url= environment.url

    return this._httpClient.post(url,{
      username: username,
      password: password
    })as Observable<Raza>;

  }



}
