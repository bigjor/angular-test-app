import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Placa } from './placa';

@Injectable({
  providedIn: 'root'
})
export class PlacasService {

  constructor(private http: HttpClient) { }

  placasURL = '/assets/placas.json';

  getPlacas(): Observable<Placa[]>{
    return this.http.get<{placas: Placa[]}>(this.placasURL).pipe(map(response => response.placas))
  }

  getPlaca(id: string): Observable<Placa | undefined>{
    return this.http.get<{placas: Placa[]}>(this.placasURL).pipe(map(response => response.placas.find(placa => placa.id === id)))
  }
}
