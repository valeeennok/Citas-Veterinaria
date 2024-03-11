
import Paciente from './Paciente'

/**
 * Renderiza un listado de pacientes.
 *
 * @param {Array} pacientes lista de pacientes
 * @param {Function} setPaciente función para cambiar el paciente seleccionado
 * @param {Function} eliminarPaciente función para eliminar un paciente
 */
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {/* Si hay pacientes, los muestra en un listado */}
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
          <p className='text-xl text-center  mb-10 '>
            Administra tus {''}
            <span className='font-bold text-lg text-violet-600'>Pacientes y Citas</span>
          </p>
          {/* Recorre cada paciente y lo muestra en un componente Paciente */}
          {pacientes.map(paciente => (
            <Paciente
              // Pasa el paciente actual
              paciente={paciente}
              // Crea un identificador único para cada paciente
              key={paciente.id}
              // Función para cambiar el paciente actual cuando se selecciona
              setPaciente={setPaciente}
              // Función para eliminar un paciente
              eliminarPaciente={eliminarPaciente}
            />

          ))}
        </>

      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
          <p className='text-xl text-center  mb-10 '>
            Comienza agregando Pacientes {''}
            <span className='font-bold text-lg text-violet-600'>Apareceran aqui</span>
          </p>
        </>
      )}
    </div>
  )
}

export default ListadoPacientes