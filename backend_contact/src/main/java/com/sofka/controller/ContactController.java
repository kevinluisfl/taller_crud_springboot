package com.sofka.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sofka.util.Response;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;


import com.sofka.domain.Contact;
import com.sofka.service.ContactService;

@Slf4j
@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.PATCH})
public class ContactController {
	
	@Autowired
	private ContactService contactService;

	private Response response = new Response();

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
	public Response listado() {
		try{
			response.contacts = contactService.list();
		}catch (Exception exc){
			response.error = true;
			response.message = exc.getMessage();
			response.status = "ERROR";
		}
		return response;
	}
	
	/**
	 * crear un contacto
	 */
	@PostMapping(path="/contact")
	public ResponseEntity<Contact> crear(@RequestBody Contact contact) {
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
	public ResponseEntity<Contact> actualizar(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar: {}", contact);
		contactService.update(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}
	
	/**
	 * modificaciones por campo
	 */
	@PatchMapping(path="/contact/fullname/{id}")
	public ResponseEntity<Contact>  actualizarNombre(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar nombre: {}", contact);
		contactService.updateName(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/phone/{id}")
	public ResponseEntity<Contact> actualizarPhone(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar telefono: {}", contact);
		contactService.updatePhone(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/email/{id}")
	public ResponseEntity<Contact> actualizarEmail(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateEmail(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/birthdate/{id}")
	public ResponseEntity<Contact> actualizarBirthdate(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateBirthdate(id,contact);
		return new ResponseEntity<>(contact, HttpStatus.OK);
	}

	@PatchMapping(path="/contact/deleted/{id}")
	public ResponseEntity<String> actualizarDeleted(@RequestBody Contact contact, @PathVariable("id") Long id) {
		log.info("Contacto a modificar correo: {}", contact);
		contactService.updateDeleted(id);
		return new ResponseEntity<>("user eliminated", HttpStatus.OK);
	}
}
