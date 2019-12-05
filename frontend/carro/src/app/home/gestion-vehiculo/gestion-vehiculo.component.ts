import { Component, OnInit } from "@angular/core";
import { Vehiculo } from "src/app/model/vehiculo/vehiculo";
import Swal from "sweetalert2";
import { CarroService } from "src/app/service/vehiculo/carro.service";
import { Router } from "@angular/router";
//import { CarroService } from "src/app/service/vehiculo/carro.service";

@Component({
  selector: "app-gestion-vehiculo",
  templateUrl: "./gestion-vehiculo.component.html",
  styleUrls: ["./gestion-vehiculo.component.css"]
})
export class GestionVehiculoComponent implements OnInit {
  vehiculo: Vehiculo = new Vehiculo();
  vehiculoArray: Vehiculo[];
  constructor(private vservice: CarroService, public router: Router) {}

  ngOnInit() {
    this.vservice.getVehiculos().subscribe(data => {
      this.vehiculoArray = data;
    });
  }

  off() {
    Swal.fire({
      title: "¿Seguro?",
      text: "¿Desea salir?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then(result => {
      if (result.value) {
        Swal.fire("Zabud!");
        this.router.navigate(["/"]);
      }
    });
  }

  saveVehiculo() {
    if (
      this.vehiculo.marca == null ||
      this.vehiculo.placa == null ||
      this.vehiculo.precio == null
    ) {
      Swal.fire({
        icon: "error",
        title: "<strong>ERROR</strong>",
        text: "Complete todos los campos!"
      });
    } else {
      //añadir
      if (this.vehiculo.id === undefined) {
        this.vservice.createVehiculo(this.vehiculo).subscribe(data => {
          this.ngOnInit();
          this.vehiculo = new Vehiculo();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Añadido: " + data.placa,
            showConfirmButton: false,
            timer: 1500
          });
        });
      } else {
        this.vservice.createVehiculo(this.vehiculo).subscribe(data => {
          this.ngOnInit();
          this.vehiculo = new Vehiculo();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Actualizado: " + data.placa,
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    }
  }

  edit(vehiculo: Vehiculo) {
    this.vehiculo = vehiculo;
  }

  delete(id: string) {
    Swal.fire({
      title: "Seguro?",
      text: "Va a eliminar este vehiculo del sistema",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si!"
    }).then(result => {
      if (result.value) {
        this.vservice.deleteVehiculo(id).subscribe(data => {
          this.ngOnInit();
        });
        Swal.fire("Eliminado!", "Vehiculo eliminado del sistema.", "success");
      }
    });
  }
}
