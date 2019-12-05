package com.app.api.interfaces;

import java.util.List;

import com.app.api.model.Vehiculo;

public interface IVehiculo {

	public List<Vehiculo> getVehiculos();
	
	public Vehiculo getVehiculo(String id);
	
	public Vehiculo addVehiculo(Vehiculo vehiculo);
	
	public void deleteVehiculo(String id);
	
}
