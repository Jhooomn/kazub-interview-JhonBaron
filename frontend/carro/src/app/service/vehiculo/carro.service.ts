import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Vehiculo } from "../../model/vehiculo/vehiculo";
@Injectable({
  providedIn: "root"
})
export class CarroService {
  url = "http://localhost:8080/vehiculo";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

  constructor(private http: HttpClient) {}
  getVehiculos(): Observable<Vehiculo[]> {
    return this.http.get(this.url).pipe(map(data => data as Vehiculo[]));
  }

  getVehiculo(id: string): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.url}/${id}`);
  }

  createVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.url, vehiculo, {
      headers: this.httpHeaders
    });
  }

  updateVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.put<Vehiculo>(this.url, vehiculo, {
      headers: this.httpHeaders
    });
  }

  deleteVehiculo(id: string): Observable<Vehiculo> {
    return this.http.delete<Vehiculo>(`${this.url}/${id}`, {
      headers: this.httpHeaders
    });
  }
}
