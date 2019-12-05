package com.app.api.model;


import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Vehiculo {


	@Id
	private String id;

	private String marca;
	

	private String placa;

	private int precio;
	
	public Vehiculo() {
	
	}
	

	public Vehiculo(String id, String marca, String placa, int precio) {
		super();
		this.id = id;
		this.marca = marca;
		this.placa = placa;
		this.precio = precio;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}

	public int getPrecio() {
		return precio;
	}

	public void setPrecio(int precio) {
		this.precio = precio;
	}
	
	

	
	
}
