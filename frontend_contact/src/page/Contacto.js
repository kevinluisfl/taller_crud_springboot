import React, { useState, useEffect}  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RegistroContacto from '../components/RegistroContacto';
import TablaContactos from '../components/TablaContactos';
import {
    vercontactosAction,
  } from "../action/contactoAction";

const Contacto = () => {

    const dispatch = useDispatch();

    ///llamar funicones de los action
    const verContactos = () => dispatch(vercontactosAction());
    ///mostrar los datos del state reducer
    const contactos = useSelector(state => state.contacto.contactos);
    const [contactosfiltro, setContactosfiltro] = useState([]);

    useEffect(() => {
        verContactos();
      // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        setContactosfiltro(contactos);
    },[contactos])

    //buscar
    const contactoSearch = (c) =>{
        const lowercasedValor = c.toLowerCase().trim();
        if (lowercasedValor === "") {
            setContactosfiltro(contactos);
        } else{
            const filteredData = contactos.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedValor)
            );
            });
            setContactosfiltro(filteredData);
        }
    }

    return ( 
        <div className="container">
            <div className="card text-center">
                <h1> <span class="material-icons">account_box</span> Contactos <span className="badge bg-secondary">{contactosfiltro && contactosfiltro.length}</span></h1>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-3">
                        <RegistroContacto />
                    </div>
                    <div className="col-xs-12 col-md-8 col-lg-9">
                    <div className="input-group">
                        <span class="material-icons input-group-text">search</span>
                        <input className="form-control" type="search" placeholder="Buscar..." onChange={e => contactoSearch(e.target.value)}/>
                    </div>
                        <TablaContactos
                            contactos = {contactosfiltro}
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contacto;