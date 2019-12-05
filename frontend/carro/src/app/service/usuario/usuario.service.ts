import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Usuario } from "../../model/usuario/usuario";
@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  url = "http://localhost:8080/usuario";
  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" });
  /*
  urlLogin = "";
  private isUserLoggedIn;
  public userLogged: Usuario;
  */
  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get(this.url).pipe(map(data => data as Usuario[]));
  }

  /*
  loginUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.urlLogin, usuario, {
      headers: this.httpHeaders
    });
  }

  setUserLoggedIn(user: Usuario) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    localStorage.setItem("usuario", JSON.stringify(user));
  }
  */
  getUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  createUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario, {
      headers: this.httpHeaders
    });
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.url, usuario, {
      headers: this.httpHeaders
    });
  }

  deleteUsuario(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url}/${id}`, {
      headers: this.httpHeaders
    });
  }
}
