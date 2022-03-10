package com.sofka.dao;

import com.sofka.domain.Contact;
import org.springframework.data.repository.CrudRepository;

public interface ContactDao extends CrudRepository<Contact, Long> {

}
