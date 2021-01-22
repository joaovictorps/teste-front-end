import { useState } from 'react';
import Modal from '../Modal';
import './style.scss';
import quickView from '../../../../assets/icons/quick-view.svg';

const Produto = ({ imagem, titulo, descricao, preco, key }) => {
    const [modalVisivel, setModalVisivel] = useState(false);

    return(
        <div className='produto' key={key}>
            <div className='image-quick-view'>
                <div className='image-produto'>
                    <div className='grad'></div>
                    <img src={imagem} alt={titulo} />

                </div>

                <div className='quick-view'>
                    <button onClick={() => setModalVisivel(true)}>
                        <img src={quickView} alt='Quick view'/>
                        
                    </button>
                    <p>Quick View</p>
                </div>
            </div>

            <h3 className='titulo-produto'>{titulo}</h3>
            <p className='descricao-produto'>{descricao}</p>
            <h2 className='preco-produto'>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
            
            {modalVisivel ? <Modal titulo={titulo} preco={preco} descricao={descricao} imagem={imagem} funcao={() => setModalVisivel(false)}  /> : null}
        </div>
    )
}

export default Produto;