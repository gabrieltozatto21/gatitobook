import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from './novo-usuario';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpCliente: HttpClient) { }

  cadastraNovoUsuario(NovoUsuario: NovoUsuario): Observable<any>{
    return this.httpCliente.post(`${API}/user/signup`, NovoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any>{
    return this.httpCliente.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
