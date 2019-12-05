package com.app.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.api.interfaces.IUsuario;
import com.app.api.model.Usuario;
import com.app.api.repository.UsuarioRepository;

@Service
public class UsuarioService implements IUsuario {

	@Autowired
	UsuarioRepository repo;

	@Override
	public List<Usuario> getUsuarios() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public Usuario getUsuario(String id) {
		// TODO Auto-generated method stub
		return repo.findById(id).get();
	}

	@Override
	public Usuario addUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		return repo.save(usuario);
	}

	@Override
	public void deleteUsuario(String id) {
		// TODO Auto-generated method stub
		repo.deleteById(id);
	}
	
}
