import React from 'react'
import { useEffect, useState } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente,setPaciente }) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }



    /**
     * Maneja el submit del formulario
     * @param {Event} e Evento submit
     */
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se envíe el formulario

        // Verifica que no haya campos vacíos
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true); // Si hay campos vacíos, muestra el error
            return; // Y sale de la función
        }

        setError(false); // Si no hay errores, los desactiva

        const objPaciente = {
            nombre, // Asigna los valores de los inputs al objeto
            propietario,
            email,
            fecha,
            sintomas,
        }

        if (paciente.id) { // Si el paciente tiene ID, lo actualiza
            objPaciente.id = paciente.id;

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState); // Genera un nuevo arreglo con los pacientes editados

            setPacientes(pacientesActualizados); // Cambia el estado de pacientes
            setPaciente({}); // Y limpia el estado de paciente
        } else { // Si el paciente no tiene ID, lo crea
            objPaciente.id = generarId(); // Asigna un ID aleatorio
            setPacientes([...pacientes, objPaciente]); // Agrega el nuevo paciente al arreglo de pacientes
        }

        setNombre(''); // Limpia los inputs
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');

    } // Fin de handleSubmit






    return (
        <div className='md:w-1/2 lg:w-2/5 mx-3'>

            <h2 className='font-black text-3xl text-center'>Seguimiento Paciente</h2>
            <p className='text-lg mt-5 text-center mb-10'>Ánade Pacientes y {''} <span className='text-violet-600 font-bold'>Administralos</span>	</p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 mb-10 px-5 '>

                {error && <Error mensaje='Todos los campos son obligatorios' />}
                {/* {error ? <p className='bg-red-800 text-white my-3 p-2 rounded-md text-center'>Todos los campos son obligatorios</p> : null} */}

                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>

                    <input
                        id='mascota'
                        placeholder='Nombre de la Mascota'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>

                    <input
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                        id='propietario'
                        placeholder='Nombre del Propietario'
                        type="text"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>

                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id='email'
                        placeholder='Email del Propietario'
                        type="email"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>

                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha</label>

                    <input
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                        id='alta'
                        type="date"
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' />
                </div>

                <div className=''>
                    <label htmlFor='síntomas' className='block text-gray-700 uppercase font-bold'>Describe los sintomas</label>

                    <textarea
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                        id='síntomas'
                        placeholder='Describe los sintomas'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'></textarea>
                </div>

                <input
                    type="submit"
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                    id="btn"
                    className='w-full p-3 mt-5 text-white uppercase font-bold bg-violet-600 cursor-pointer transition-colors hover:bg-violet-900 transition-color rounded-md' />
            </form>
        </div>
    )
}

export default Formulario
