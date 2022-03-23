package com.sofka.dao;

import com.sofka.domain.Contact;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ContactDao extends CrudRepository<Contact, Long> {

    @Modifying
    @Query("UPDATE Contact con SET con.fullname = :fullname WHERE con.id = :id")
    public void updateName(@Param(value = "id") Long id,
                           @Param(value = "fullname") String fullname);

    @Modifying
    @Query("UPDATE Contact con SET con.phone = :phone WHERE con.id = :id")
    public void updatePhone(@Param(value = "id") Long id,
                           @Param(value = "phone") String phone);

    @Modifying
    @Query("UPDATE Contact con SET con.email = :email WHERE con.id = :id")
    public void updateEmail(@Param(value = "id") Long id,
                            @Param(value = "email") String email);

    @Modifying
    @Query("UPDATE Contact con SET con.birthdate = :birthdate WHERE con.id = :id")
    public void updateBirthdate(@Param(value = "id") Long id,
                            @Param(value = "birthdate") String birthdate);

    @Modifying
    @Query("UPDATE Contact con SET con.deleted = 'true' WHERE con.id = :id")
    public void updateDeleted(@Param(value = "id") Long id);
}
