package com.app.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.app.api.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {

}
