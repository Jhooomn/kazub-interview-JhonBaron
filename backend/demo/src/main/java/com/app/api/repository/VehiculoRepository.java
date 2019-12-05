package com.app.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.app.api.model.Vehiculo;

public interface VehiculoRepository extends MongoRepository<Vehiculo, String>{

}
