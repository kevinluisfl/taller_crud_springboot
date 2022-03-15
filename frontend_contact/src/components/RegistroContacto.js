import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Moment from 'moment';
import {
    guardarcontactoAction,
    editarcontactoAction,
    // vercontactosAction,
  } from "../action/contactoAction";

const RegistroContacto = () => {

    const [error, setError] = useState(false);
    const [selectedDate, setSelectedDate] = useState(Moment().format('YYYY-MM-DD'));
    const [input, setInput] = useState({
        idcontact: "",
        fullname: "",
        phone: "",
        email: "",
        birthdate: selectedDate
    });

    const dispatch = useDispatch();

    const actualizarContacto = (con) => dispatch(editarcontactoAction(con));
    const agregarContacto = (con) => dispatch(guardarcontactoAction(con));
    // const verContactos = () => dispatch(vercontactosAction());

    const contactoeditar = useSelector(state => state.contacto.contactoeditar);
    const {fullname, phone, email} = input;
    ///cargar en blanco los campos
    useEffect(()=>{
        setInput({
            idcontact: "",
            fullname: "",
            phone: "",
            email: "",
        })
        // eslint-disable-next-line
    }, [])

    //si hay un item por editar
    useEffect(()=>{
        console.log(contactoeditar);
        if(contactoeditar){
            setInput({
                idcontact: contactoeditar.id_contact,
                fullname: contactoeditar.full_name,
                phone: contactoeditar.phone,
                email: contactoeditar.email,
                birthdate: contactoeditar.birth_date
            })
        }
    }, [contactoeditar])

    ///cargar valor de la fecha
    useEffect(() => {
//         const birth = Moment().format('YYYY/MM/DD');
//         setSelectedDate(birth);
        setInput({
          ...input,
          birthdate: selectedDate
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [selectedDate])

    const handleChange = (e)=>{
        console.log(e.currentTarget.value)
        setInput(
            {
                ...input,
                [e.currentTarget.name]: e.currentTarget.value
            },[input]
        )
        setError(false);
    };
    ///state de la fecha
    const handleDateChange = (e) => {
        console.log(e.currentTarget.value)
        const birth = Moment(e.currentTarget.value).format('YYYY-MM-DD');
        console.log(birth)
        setSelectedDate(birth);
    };

    const  onSubmit = (e) =>{
        e.preventDefault();

        if(fullname.trim() === "" || phone.trim() === "" || email.trim() === ""){
            setError(true);
            return;
        }

        if(contactoeditar){
            actualizarContacto(input);
        }else{
            agregarContacto(input);
        }
        limpiar();
    }

    const limpiar = () =>{
        setError(false);
        // verContactos();
        setInput({
            idcontact: "",
            fullname: "",
            phone: "",
            email: "",
            birthdate: selectedDate
        })
    }

    return ( 
        <div>
            <h2>Registro contacto</h2>
            <form alignItems="center" 
            onSubmit={onSubmit}
            >
                <div className="form-floating">
                    <input type="text" className="form-control" id="fullname" name="fullname" value={fullname} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Nombre completo</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Telefono</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="date" className="form-control" id="birthdate" name="birthdate" value={selectedDate} onChange={(e)=>handleDateChange(e)}/>
                    <label for="floatingInput">Fecha de nacimiento</label>
                </div>
                <button type="button" className="btn btn-secondary btn-lg" onClick={onSubmit}>Guardar</button>
            </form>
            {error &&(
                <div className="alert alert-danger" role="alert">
                    Todos los campos son obligatorios!
                </div>)}
        </div>
     );
}

export default RegistroContacto;
