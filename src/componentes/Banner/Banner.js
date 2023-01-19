import './Banner.css'


// Para adicionar mais de uma tag dentro do elemento react, usar a tag <Fragment> para englobar o código.
// Também podemosusar a tag <> e fechar com </>
export const Banner = () => {
    return(
        <header className='banner'>
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
        </header>
    )
}



