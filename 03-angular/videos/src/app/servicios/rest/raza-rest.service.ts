import {Injectable} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Raza} from "../../interfaces/raza";
import {map} from "rxjs/operators";


@Injectable()
export class RazaRestService{

  nombreModelo='/Raza';
  constructor(private readonly _httpClient: HttpClient){

  }

  findAll():Observable<Raza[]>{
    const razas$= this._httpClient
      .get(environment.url+this.nombreModelo)
      .pipe(
      map((respuesta)=>{
        return <Raza[]>respuesta;
      })
      )

    return razas$;
  }

  delete(id:number):Observable<Raza>{
    return this._httpClient
      .delete(environment.url+this.nombreModelo+`/${id}`)
      .pipe(map(r=><Raza> r));
  }

}
