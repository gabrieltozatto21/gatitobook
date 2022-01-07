import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpCliente: HttpClient) { }

  cadastraNovoUsuario(NovoUsuario: NovoUsuario): Observable<any>{
    return this.httpCliente.post('http://localhost:3000/user/signup', NovoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string): Observable<any>{
    return this.httpCliente.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
