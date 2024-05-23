import { useState, useEffect } from "react"
import './Books.css'
import { useNavigate } from "react-router-dom";
import React from 'react'

const Books = () => {
    
const initalValue = {
name:"",
email:"",
date:"",
time:"",
}
const [book, setBook] = useState(initalValue);
const [message, setMessage] = useState("")
const [btnDisabled, setBtnDisabled] = useState(true)
const navigate = useNavigate();


const validateForm = () => {
    if (!book.name || !book.email || !book.time || !book.date ){
        setMessage("")
    }
    else if (book.name.length < 3 ) {
        setMessage("El nombre debe tener al menoz 3 letras ")
        setBtnDisabled (true)
        
    } else {
        setMessage("")
        setBtnDisabled(false)
        
    }
}

useEffect(() => {
    validateForm();
}, [book]);

const handleInputChange = (e) => {

// console.log(e.target.name);
setBook({
...book, [e.target.name]:e.target.value
})
}
const handleOnSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("book",JSON.stringify(book))
    console.log(book)
    setBook(initalValue)
    navigate('/menu')

}
return (
<div>

<form onSubmit={handleOnSubmit}>
<input type="text" name="name" id="name" placeholder="Escribe tu nombre" onChange={handleInputChange}/>
<input type="email" name="email" id="email" placeholder="Escribe tu correo" onChange={handleInputChange} /><br></br>
<fieldset >
    <legend>Detalles de la reserva</legend>

<label> Seleccione la fecha</label><br></br>
<input type="date" name="date" id="date" onChange={handleInputChange}  /><br></br>
<label> Seleccione la hora </label><br></br>
<input type="time" name="time" id="time" onChange={handleInputChange} /><br></br>
</fieldset>
<input type="submit" value="Enviar" disabled={btnDisabled} />
</form>
</div>

)
}

export default Books