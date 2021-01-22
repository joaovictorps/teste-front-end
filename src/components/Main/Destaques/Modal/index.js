import './style.scss';

import close from '../../../../assets/icons/close.svg';
import arrowRight from '../../../../assets/icons/arrow-right-very-small.svg';

const Modal = ({ titulo, preco, descricao, imagem, funcao}) => {
    return(
        <div className='bg-modal'>
            <div className='modal'>
                <button onClick={funcao} className='fechar-modal'><img src={close} alt='Fechar'/></button>
                <img src={imagem} alt={titulo} />

                <div className='informacoes-modal'>
                    <h1 className='titulo-produto-modal'>{titulo}</h1>
                    <h2 className='preco-produto-modal'>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                    <p className='descricao-produto-modal'>{descricao}</p>

                    <div className='mais-detalhes-modal'>
                        <a href='#'>Veja mais detalhes do produto</a>
                        <button><img src={arrowRight} alt='>'/></button>
                    </div>
                        
                    <button className='add-carrinho-modal'>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;