package com.sofka.service;

import java.util.List;
import java.util.Optional;

import com.sofka.domain.Contact;

public interface IContactService {
	
	public List<Contact> list();
	
	public Contact save(Contact contact);
	
	public Contact update(Long id, Contact contact);
	
	public void delete(Contact contact);
	
	public Optional<Contact> findContact(Contact contact);

}
