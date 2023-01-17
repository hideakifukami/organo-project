import Colaborador from '../Colaborador'
import './Time.css'

// dumb component - componente estático - visual
const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            {props.colaboradores.map( colaborador => <Colaborador /> )}
        </section>    
    )
}

export default Time