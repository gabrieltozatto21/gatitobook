import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(user: string, pass: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${API}/user/login`, {
      userName: user,
      password: pass
    },
      { observe: 'response' }
    ).pipe(
      tap(res => {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);
      })
    )
  }
}
