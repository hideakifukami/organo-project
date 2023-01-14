import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao'>{props.children}</button>
    )
}

//props.children recebe os filhos do componente

export default Botao