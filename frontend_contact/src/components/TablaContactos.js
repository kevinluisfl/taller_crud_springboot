import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import {
    vercontactosAction,
    eliminarcontactoAction,
    obtenerEditarcontactoAction,
  } from "../action/contactoAction";

const TablaContactos = () => {

    const dispatch = useDispatch();

    ///llamar funicones de los action
    const verContactos = () => dispatch(vercontactosAction());
    const eliminarContacto = (contact) => dispatch(eliminarcontactoAction(contact));
    const obtenerEditarContacto = (contact) => dispatch(obtenerEditarcontactoAction(contact));

    ///mostrar los datos del state reducer
    const contactos = useSelector(state => state.contacto.contactos);

    useEffect(() => {
        verContactos();
      // eslint-disable-next-line
    }, [])

      //editar
  const updatecontacto = (contact)=>{
    obtenerEditarContacto(contact);
  }
  //eliminar
  const deletecontacto = (contact) =>{
    eliminarContacto(contact);
  }

    return ( 
        <div>
            <h2>Tabla contactos</h2>
            <table className="table">
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
                        <tr key={contact.id_contact}>
                        <th>{contact.con_full_name}</th>
                        <td>{contact.con_phone}</td>
                        <td>{contact.con_email}</td>
                        <td>{ Moment(contact.con_birth_date).utc().format('YYYY/MM/DD')  }</td>
                        <td>
                            <div>
                            <button type="button" onClick={()=>updatecontacto(contact)} className="btn btn-secondary btn-sm">Editar</button>
                            <button type="button" onClick={()=>deletecontacto(contact)} className="btn btn-danger btn-sm">Eliminar</button>
                            </div>
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