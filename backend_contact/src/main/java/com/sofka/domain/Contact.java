package com.sofka.domain;

import java.util.Date;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;


@Data
@Entity
@Table(name="contact")
public class Contact implements Serializable{

	private static final long serialVersionUID = 1L;
	
	/**
	 * atributos correspondientes a columnas de la tabla
	 */
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_contact")
	private Long id;
	
	@Column(name = "con_full_name")
	private String fullname;
	
	@Column(name = "con_phone")
	private String phone;
	
	@Column(name = "con_email")
	private String email;
	
	@Column(name = "con_birth_date")
	private Date birthdate;
	
	@Column(name = "con_deleted")
	private String deleted;

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	

}
