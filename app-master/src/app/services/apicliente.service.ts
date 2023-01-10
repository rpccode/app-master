import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OutputContext } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../models/cliente';
import { Response} from '../models/response';

const httpOption = {

  headers: new  HttpHeaders({
    'Contend-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiclienteService {

    url: string = "http://localhost:9097/api/Cliente"
  constructor(
    private _http:HttpClient
  ) { }

  GetCliente(): Observable<Response> {

    return this._http.get<Response>(this.url);
  }

  add(Cliente: cliente): Observable<Response> {

      return this._http.post<Response>(this.url, Cliente, httpOption)

  }
}
