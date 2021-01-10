import React from 'react';

import Menu from './icons/menu.svg';
import Cart from './icons/cart.svg';
import Close from './icons/close.svg';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="Menu" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">LOGO</Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/login">Sign in and register</Link></li>

                <li>
                    <img src={Close} alt="Close" width="30" className="menu" />
                </li>
            </ul>
                <div className="cart-icon">
                    <span>0</span>
                    <Link to ="/cart">
                        <img src={Cart} alt="Cart" width="30" />
                    </Link>
                </div> 
        </header>
    );
}

export default Header;