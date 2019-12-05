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

import com.app.api.model.Usuario;
import com.app.api.service.UsuarioService;

@RestController
@CrossOrigin(origins = { "http://localhost:4200" })
public class UsuarioController {

	@Autowired
	UsuarioService service;
	
	@GetMapping("/usuario")
	public List<Usuario> getUsuarios(){
		return service.getUsuarios();
	}
	
	@GetMapping("/usuario/{id}")
	public Usuario getUsuario(@PathVariable String id) {
		return service.getUsuario(id);
	}
	
	@PostMapping("/usuario")
	public Usuario addUsuario(@RequestBody Usuario usuario) {
		return service.addUsuario(usuario);
	}
	
	@PutMapping("/usuario")
	public Usuario updateUsuario(@RequestBody Usuario usuario) {
		return service.addUsuario(usuario);
	}
	
	
	
	@DeleteMapping("/usuario/{id}")
	public void deleteUsuario(@PathVariable String id) {
		service.deleteUsuario(id);
	}
	
	
}
