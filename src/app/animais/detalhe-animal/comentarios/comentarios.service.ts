import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private httpCliente: HttpClient) {}

  buscaComentario(id: number): Observable<Comentarios> {
    return this.httpCliente.get<Comentarios>(`${API}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.httpCliente.post<Comentario>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
