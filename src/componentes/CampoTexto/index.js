import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {

    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto