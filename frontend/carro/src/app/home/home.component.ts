import { Component, OnInit } from "@angular/core";
import { Usuario } from "../model/usuario/usuario";
import Swal from "sweetalert2";
import { Router } from "@angular/router";
import { UsuarioService } from "../service/usuario/usuario.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  usuario: Usuario = new Usuario();
  usuarioArray: Usuario[];
  exist: boolean = false;
  constructor(public router: Router, private uservice: UsuarioService) {}

  ngOnInit() {
    this.usuario = new Usuario();
    this.uservice.getUsuarios().subscribe(data => {
      this.usuarioArray = data;
    });
  }

  login() {
    if (this.usuario.username == null || this.usuario.password == null) {
      Swal.fire({
        icon: "error",
        title: "<strong> ERROR </strong>",
        text: "Completa los campos!"
      });
    } else {
      for (let i of this.usuarioArray) {
        if (
          this.usuario.password === i.password &&
          this.usuario.username === i.username
        ) {
          this.exist = true;
        }
      }

      if (this.exist) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido!",
          showConfirmButton: false,
          timer: 1000
        });
        this.usuario = new Usuario();
        this.exist = false;
        this.router.navigate(["/vehiculo"]);
      } else {
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: "Registrese!"
        });
      }
    }
  }

  add() {
    if (
      this.usuario.username === undefined ||
      this.usuario.password === undefined
    ) {
      Swal.fire({
        icon: "error",
        title: "<strong> ERROR </strong>",
        text: "Completa los campos!"
      });
    } else {
      this.uservice.createUsuario(this.usuario).subscribe(data => {
        this.usuario = new Usuario();
        this.router.navigate(["/vehiculo"]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido!",
          showConfirmButton: false,
          timer: 1000
        });
      });
    }
  }
}
