

const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    /**
     * Maneja la eliminación de un paciente. Verifica si el usuario
     * realmente desea eliminar el paciente y, si la respuesta es afirmativa,
     * llama a la función eliminarPaciente con el id del paciente.
     */
    const handleEliminarPaciente = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        // Si el usuario confirma la eliminación
        if (respuesta) {
            // Ejecutar la función eliminarPaciente
            eliminarPaciente(id)
        }
    }

    return (
        
            <div className='mx-3 my-10 bg-white shadow-md rounded-xl py-10 mb-10 px-5'>
                <p className='font-bold mb-3 uppercase text-gray-700'>Nombre: {''}
                    <span className='font-normal normal-case'>{nombre}</span>
                </p>
                <p className='font-bold mb-3 uppercase text-gray-700'>Propietario: {''}
                    <span className='font-normal normal-case'>{propietario}</span>
                </p>
                <p className='font-bold mb-3 uppercase text-gray-700'>Email: {''}
                    <span className='font-normal normal-case'>{email}</span>
                </p>
                <p className='font-bold mb-3 uppercase text-gray-700'>Fecha: {''}
                    <span className='font-normal normal-case'>{fecha}</span>
                </p>
                <p className='font-bold mb-3 uppercase text-gray-700'>Sintomas: {''}
                    <span className='font-normal normal-case'>{sintomas}</span>
                </p>

                <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-3">
                    
                    <button
                    type="button"
                    className="py-2 px-10 bg-violet-600 hover:bg-violet-950 text-white font-bold uppercase rounded-md"
                    onClick={() => setPaciente(paciente)}
                    >Editar</button>
                    
                    <button 
                    onClick={handleEliminarPaciente}
                    type="button" 
                    className="py-2 px-10 bg-red-600 hover:bg-red-950 text-white font-bold uppercase rounded-md">Eliminar</button>
                </div>

            </div>
        
    )
}

export default Paciente
