package com.sofka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sofka.domain.Contact;
import com.sofka.service.ContactService;

@RestController
public class ContactController {
	
	@Autowired
	private ContactService contactService;
	
	/**
	 * listar todos los contactos
	 */
	@GetMapping(path="/contacts")
	public List<Contact> listado() {
//		var contacts = contactService.list();
//		return contacts;
		return contactService.list();
	}
	
	/**
	 * crear un contacto
	 */
	@PostMapping(path="/contact")
	public void crear() {
		
	}
	
	/**
	 * borrar un contacto
	 */
	@DeleteMapping(path="/contact/{id}")
	public void borrar() {
		
	}

	/**
	 * actualizar un contacto
	 */
	@PutMapping(path="/contact/{id}")
	public void actualizar() {
		
	}
	
	/**
	 * modificaciones por campo
	 */
	@PatchMapping(path="/contact/fullname/{id}")
	public void actualizarNombre() {
		
	}
	@PatchMapping(path="/contact/phone/{id}")
	public void actualizarPhone() {
		
	}
	@PatchMapping(path="/contact/email/{id}")
	public void actualizarEmail() {
		
	}
	@PatchMapping(path="/contact/birthdate/{id}")
	public void actualizarBirthdate() {
		
	}
}
