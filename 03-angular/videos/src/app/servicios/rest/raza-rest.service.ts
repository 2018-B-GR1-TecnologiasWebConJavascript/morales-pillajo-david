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

  create(nombre:string):Observable<Raza>{

    const objetocAGuardar: Raza={
      nombre:nombre
    };

    return this._httpClient
      .post(environment.url+this.nombreModelo,objetocAGuardar)
      .pipe(map(r=><Raza>r));
  }

  findOneById(id:number | string):Observable<Raza>{
      const url= environment.url+this.nombreModelo+'/'+id;
    return this._httpClient
      .get(url)
      .pipe(map(r=><Raza>r));

  }

  updateOneById(raza:Raza){
    const url= environment.url+this.nombreModelo+'/'+raza.id;

    return this._httpClient
      .put(url,raza)
      .pipe(map(r=><Raza>r))
  }
}
