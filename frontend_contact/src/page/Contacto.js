import React, { useEffect}  from 'react';
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

    useEffect(() => {
        verContactos();
      // eslint-disable-next-line
    }, [])

    return ( 
        <div className="container">
            <div className="card">
                <h1>Contactos <span className="badge bg-secondary">{contactos && contactos.length}</span></h1>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-lg-5">
                        <RegistroContacto />
                    </div>
                    <div className="col-xs-12 col-md-8 col-lg-7">
                        <TablaContactos />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contacto;