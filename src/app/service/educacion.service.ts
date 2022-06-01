import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';


@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educacion/';
  EDIT ='editar/';

  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<educacion>{
    return this.http.get<educacion>(this.URL + 'traer/perfil');
  }

  public deleteEducacion(): Observable<educacion>{
    return this.http.delete<educacion>(this.URL + 'borrar/{id}');
  }

  public editEducacion(id: number, empresa: String, puesto: String, descripcion: String, fecha: String): Observable<educacion>{
    return this.http.post<educacion>(this.URL + this.EDIT + empresa + puesto +descripcion ,fecha);
  }

}
