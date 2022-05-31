import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencia/';
  EDIT ='editar/';

  constructor(private http: HttpClient) { }

  public getExperiencia(): Observable<experiencia>{
    return this.http.get<experiencia>(this.URL + 'traer/perfil');
  }

  public deleteExperiencia(): Observable<experiencia>{
    return this.http.delete<experiencia>(this.URL + 'borrar/{id}');
  }

  public editExperiencia(id: number, empresa: String, puesto: String, descripcion: String, fecha: String): Observable<experiencia>{
    return this.http.post<experiencia>(this.URL + this.EDIT + empresa + puesto +descripcion ,fecha);
  }

}
