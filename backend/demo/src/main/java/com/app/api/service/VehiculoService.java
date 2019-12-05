package com.app.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.api.interfaces.IVehiculo;
import com.app.api.model.Vehiculo;
import com.app.api.repository.VehiculoRepository;

@Service
public class VehiculoService implements IVehiculo {

	@Autowired
	VehiculoRepository repo;

	@Override
	public List<Vehiculo> getVehiculos() {
		return repo.findAll();
	}

	@Override
	public Vehiculo getVehiculo(String id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public Vehiculo addVehiculo(Vehiculo vehiculo) {
		// TODO Auto-generated method stub
		return repo.save(vehiculo);
	}

	@Override
	public void deleteVehiculo(String id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}

}
