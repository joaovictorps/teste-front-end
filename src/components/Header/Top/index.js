import './style.scss';

import arrow from '../../../assets/icons/arrow.svg';
import cadeado from '../../../assets/icons/cadeado.svg';
import porcentagem from '../../../assets/icons/porcentagem.svg';
import delivery from '../../../assets/icons/delivery-truck.svg';

const Top = () => {
    return (
        <section className='container top'>
                <ul className='header-top'>
                    <li>
                        <img src={cadeado} alt='cadeado icon' />
                        Compra 100% segura
                    </li>
                    <div className='linha-vertical'></div>
                    <li>
                        <img src={arrow} alt='arrow icon' />
                        1° troca grátis
                    </li>
                    <div className='linha-vertical'></div>
                    <li>
                        <img src={porcentagem} alt='porcentagem icon' />
                        5X sem juros
                    </li>
                    <div className='linha-vertical'></div>
                    <li>
                        <img src={delivery} alt='delivery-truck icon' />
                        entregas em todo brasil
                    </li>
                </ul>
        </section>
    )
}

export default Top;