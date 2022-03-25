import {
    VER_CONTACTO,
    VER_CONTACTO_EXITO,
    VER_CONTACTO_ERROR,
    EDITAR_CONTACTO,
    EDITAR_CONTACTO_EXITO,
    EDITAR_CONTACTO_ERROR,
    GUARDAR_CONTACTO,
    GUARDAR_CONTACTO_EXITO,
    GUARDAR_CONTACTO_ERROR,
    ELIMINAR_CONTACTO,
    ELIMINAR_CONTACTO_EXITO,
    ELIMINAR_CONTACTO_ERROR,
    OBTENER_EDITAR_CONTACTO,
    CONTACTO_EDITAR_NULL
} from '../type';

import clienteAxios from '../config/axios';

/////traer contactos
export function vercontactosAction(){
    return async (dispatch) => {
        dispatch(vercontactos());
        try {
            const res = await clienteAxios.get('contacts');
             console.log(res.data);
            dispatch(vercontactosExito(res.data.contacts));
        } catch (error) {
            console.log(error);
            dispatch(vercontactosError());
        }
    }
}
const vercontactos = () =>({
    type: VER_CONTACTO
});
const vercontactosExito = (contact) =>({
    type: VER_CONTACTO_EXITO,
    payload: contact
});
const vercontactosError = () =>({
    type: VER_CONTACTO_ERROR
});
//////////fin traer contactos de DB

////obtener contacto editar
export function obtenerEditarcontactoAction(contact){
    return dispatch =>{
        dispatch(obtenerEditarcontacto(contact));
    }
}

const obtenerEditarcontacto = (contact) =>({
    type: OBTENER_EDITAR_CONTACTO,
    payload: contact
})

////fin obtener contacto editar

/////////////guardar contacto
export function guardarcontactoAction(contact){
    return async dispatch =>{
        dispatch(guardarcontacto());
        try {
            const res = await clienteAxios.post('contact', contact);
            console.log(res.data);
            dispatch(guardarcontactoExito(contact));
            //refrescar los datos
            dispatch(vercontactosAction());
        } catch (error) {
            console.log(error);
            dispatch(guardarcontactoError());
        }
    }
}
const guardarcontacto = () =>({
    type: GUARDAR_CONTACTO
});
const guardarcontactoExito = (contact) =>({
    type: GUARDAR_CONTACTO_EXITO,
    payload: contact
});
const guardarcontactoError = () => ({
    type: GUARDAR_CONTACTO_ERROR
});
/////////////fin guardar contacto

///////editar contacto
export function editarcontactoAction(contact){
    return async dispatch =>{
            dispatch(editarcontacto());
            try {
                const res = await clienteAxios.put(`contact/${contact.id}`, contact);
                console.log(res.data);
                dispatch(editarcontactoExito(contact));
                //refrescar los datos
                dispatch(vercontactosAction())
        } catch (error) {
            console.log(error);
            dispatch(editarcontactoError());
        }
    }
}
const editarcontacto = () =>({
    type: EDITAR_CONTACTO
});
const editarcontactoExito = (contact) =>({
    type: EDITAR_CONTACTO_EXITO,
    payload: contact
});
const editarcontactoError = () =>({
    type: EDITAR_CONTACTO_ERROR
});
/////////////fin editar contacto

/////////////eliminar contacto
export function eliminarcontactoAction(contact){
    return async dispatch=>{
        dispatch(eliminarcontacto());
        try {
            const res = await clienteAxios.delete(`contact/${contact.id}`);
            console.log(res.data);
            dispatch(eliminarcontactoExito(contact));
                //refrescar los datos
                dispatch(vercontactosAction());
        } catch (error) {
            console.log(error);
            dispatch(eliminarcontactoError());
        }
    }
}
const eliminarcontacto = () =>({
    type: ELIMINAR_CONTACTO
});
const eliminarcontactoExito = (contact) =>({
    type: ELIMINAR_CONTACTO_EXITO,
    payload: contact
});
const eliminarcontactoError = () => ({
    type: ELIMINAR_CONTACTO_ERROR
});
////////////////fin eliminar contacto

/////////////contacto editar null
export function contactoeditarnullAction(){
    return dispatch =>{
        dispatch(contactoeditarnull());
    }
}

const contactoeditarnull = () =>({
    type: CONTACTO_EDITAR_NULL
})
/////////////fin contacto editar null