import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)}>   
                <option value={""}></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

// map faz a varredura de uma lista e retorna uma nova lista com valor transformado
export default ListaSuspensa