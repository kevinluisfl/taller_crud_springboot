import React from 'react';
import { useDispatch } from 'react-redux';
import Moment from 'moment';
import {
    eliminarcontactoAction,
    obtenerEditarcontactoAction,
  } from "../action/contactoAction";

const TablaContactos = (props) => {

  const {contactos} = props;

  const dispatch = useDispatch();

  ///llamar funicones de los action
  const eliminarContacto = (contact) => dispatch(eliminarcontactoAction(contact));
  const obtenerEditarContacto = (contact) => dispatch(obtenerEditarcontactoAction(contact));

    //editar
  const updatecontacto = (contact)=>{
    obtenerEditarContacto(contact);
  }
  //eliminar
  const deletecontacto = (contact) =>{
    eliminarContacto(contact);
  }

    return ( 
        <div className="container">
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Email</th>
                    <th scope="col">Cumpleaños</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                { contactos.length === 0 ? 
                (   <tr>
                        <td colSpan={4}>No hay contactos</td>
                    </tr>)
                    :
                    contactos.map(contact =>(
                        <tr key={contact.id}>
                        <td>{contact.fullname}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>{ Moment(contact.birthdate).utc().format('DD/MM/YYYY')  }</td>
                        <td>
                            <span type="button" title="Editar" onClick={()=>updatecontacto(contact)} class="material-icons btnEdit">edit</span>
                            <span type="button" title="Eliminar" onClick={()=>deletecontacto(contact)} class="material-icons btnDelete">delete</span>
                        </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default TablaContactos;