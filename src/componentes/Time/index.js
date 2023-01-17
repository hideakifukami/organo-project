import Colaborador from '../Colaborador'
import './Time.css'

// dumb component - componente estático - visual
const Time = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    
    return (
        <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            
            <div class="colaboradores">
                {props.colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>    
    )
}

export default Time