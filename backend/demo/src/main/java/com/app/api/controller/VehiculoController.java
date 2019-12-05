package com.app.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.api.model.Vehiculo;
import com.app.api.service.VehiculoService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class VehiculoController {

	@Autowired
	VehiculoService service;

	@GetMapping("/vehiculo")
	public List<Vehiculo> getVehiculos(){
		return service.getVehiculos();
	}
	
	@GetMapping("/vehiculo/{id}")
	public Vehiculo getVehiculo(@PathVariable String id) {
		return service.getVehiculo(id);
	}

	
	@PostMapping("/vehiculo")
	public Vehiculo addVehiculo(@RequestBody Vehiculo vehiculo) {
		return service.addVehiculo(vehiculo);
	}

	@PutMapping("/vehiculo")
	public Vehiculo updateVehiculo(@RequestBody Vehiculo vehiculo) {
		return service.addVehiculo(vehiculo);
	}
	
	
	@DeleteMapping("/vehiculo/{id}")
	public void deleteVehiculo(@PathVariable String id) {
		service.deleteVehiculo(id);
	}
	
}
