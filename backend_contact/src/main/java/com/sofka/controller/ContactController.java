package com.sofka.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.sofka.domain.Contact;
import com.sofka.service.ContactService;

@Slf4j
@RestController
//@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ContactController {
	
	@Autowired
	private ContactService contactService;

	/**
	 * prueba estilo json
	 */
	@GetMapping(path="/")
	public Map<String, String> index() {
		Map<String, String> respuesta = new HashMap<>();
		respuesta.put("message", "bye cruel world");
		return respuesta;
	}
	
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
	public ResponseEntity<Contact> crear(Contact contact) {
		log.info("Contacto a crear: {}", contact);
		contactService.save(contact);
		return new ResponseEntity<>(contact, HttpStatus.CREATED);
	}
	
	/**
	 * borrar un contacto
	 */
	@DeleteMapping(path="/contact/{id}")
	public ResponseEntity<Contact>  borrar(Contact contact) {
		log.info("Contacto a borrar: {}", contact);
		contactService.delete(contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	/**
	 * actualizar un contacto
	 */
	@PutMapping(path="/contact/{id}")
	public ResponseEntity<Contact> actualizar(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar: {}", contact);
		contactService.update(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}
	
	/**
	 * modificaciones por campo
	 */
	@PatchMapping(path="/contact/fullname/{id}")
	public ResponseEntity<Contact>  actualizarNombre(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar nombre: {}", contact);
		contactService.updateName(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/phone/{id}")
	public ResponseEntity<Contact> actualizarPhone(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar telefono: {}", contact);
		contactService.updatePhone(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/email/{id}")
	public ResponseEntity<Contact> actualizarEmail(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateEmail(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/birthdate/{id}")
	public ResponseEntity<Contact> actualizarBirthdate(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateBirthdate(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/deleted/{id}")
	public ResponseEntity<String> actualizarDeleted(Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateDeleted(id);
		return new ResponseEntity<>("user eliminated", HttpStatus.OK);
	}
}
