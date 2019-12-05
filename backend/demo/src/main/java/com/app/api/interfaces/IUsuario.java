package com.app.api.interfaces;

import java.util.List;

import com.app.api.model.Usuario;

public interface IUsuario {

	public List<Usuario> getUsuarios();
	
	public Usuario getUsuario(String id);
	
	public Usuario addUsuario(Usuario usuario);
	
	public void deleteUsuario(String id);
	
}
