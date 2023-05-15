import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import Swal from 'sweetalert2'
import './FormPay.css'

import { collection, getDocs, query, where, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase/config";

const FormPay = () => {

    const {carrito, setCarrito} = useContext(CarritoContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');


    const handleReset = () => {
        setNombre('');
        setApellido('');
        setEmail('');
        setTelefono('');
        setDireccion('');

        setCarrito([]);
    }


    const handlePagar = (e) => {
        e.preventDefault();
        
        if( [nombre, apellido, email, telefono].includes('') ) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Todos los campos son obligatorios`,
                showConfirmButton: false,
                timer: 1500
                })
            return;
        }

        if (carrito.length === 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `No hay productos en el carrito`,
                showConfirmButton: false,
                timer: 1500
              })
            return;
        } 

        const newOrder = {
            buyer: {
                name: nombre,
                lastname: apellido,
                email: email,
                phone: telefono,
                address: direccion
            },
            items: carrito,
            date: new Date().toString(),
            total: carrito.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
        }


        const orders = collection(db, "ordenes");
        const q = query(orders, where("buyer.email", "==", email));
        getDocs(q).then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                addDoc(orders, newOrder)
                    .then((docRef) => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Se creo la orden con ID: ${docRef.id}`,
                            showConfirmButton: false,
                            timer: 3000
                            })
                        handleReset();
                    })
            } else {
                updateDoc(orders, newOrder)
            }
        });

        






        


    }


  return (
    <div>
        <h1 className="carrito">Formulario de pago</h1>

        <form className='form1'>
            <div>
                <label className='form' htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre' />
            </div>

            <div>
                <label className='form'  htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}
                placeholder='Apellido' />
            </div>

            <div>
                <label className='form'  htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            </div>

            <div>
                <label className='form'   htmlFor="telefono">Telefono</label>
                <input type="number" name="telefono" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder='Telefono'/>
            </div>

            <div>
                <label className='form'  htmlFor="direccion">Direccion</label>
                <input type="text" name="direccion" id="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder='Direccion'/>
            </div>

            <button className="boton" onClick={handlePagar}>Enviar</button>
        </form>

    </div>
  )
}

export default FormPay