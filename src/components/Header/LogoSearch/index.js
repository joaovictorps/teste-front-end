import './style.scss';

import ninjaLogo from '../../../assets/logos/ninja-som-logo.svg';
import searchIcon from '../../../assets/icons/search.svg';
import whatsappIcon from '../../../assets/icons/whatsapp.svg';
import avatar from '../../../assets/icons/avatar.svg';
import poligono from '../../../assets/icons/poligono.svg';
import bag from '../../../assets/icons/bag.svg';

const LogoSearch = () => {
    return (
        <section className='container'>
            <div className='header-logo-search'>
                <h1>
                    <img src={ninjaLogo} alt='logo' />
                </h1>

                <div className='input-area' >
                    <input type='text' placeholder='BUSQUE AQUI...' />
                    <img src={searchIcon} alt='search icon' />

                </div>

                <p className='fone'>
                    <img src={whatsappIcon} alt='whatsapp icon' />
                    (11) 99999-9999
                </p>

                <div className='minha-conta'>
                    
                    <img src={avatar} alt='avatar' />
                    <div className='ola-nome'>
                        <h2>Olá, visitante</h2>
                        <span>minha conta</span>
                    </div>

                    <img src={poligono} alt='' />

                </div>

                <div className='carrinho'>
                    <img src={bag} alt='bag icon' />

                    <h2>Seu carrinho</h2>
                    <span>0 item(s)</span>
                </div>
            </div>
        </section>
    )
}

export default LogoSearch;