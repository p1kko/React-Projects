import React from 'react';
import {Link} from 'react-router-dom'
import { AppContext } from '../App';

function Header(props){
const {cartItems} = React.useContext(AppContext)
const totalPrice = cartItems.reduce((sum,obj) => obj.price + sum, 0)

    return(
        <header className="d-flex justify-between align-center p-40">
          <Link to="">
          <div className="d-flex align-center">
        <img
            width={40}
            height={40}
            className="mr-15"
            src="/img/Logo.png"
            alt="logo"
          />
        
          
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин кросівок</p>
          </div>
        </div>
       </Link>
        

        <ul className="d-flex">
          <li className="mr-30 cu-p" onClick={props.onClickCart}>
            <img
              width={18}
              height={18}
              className="mr-10"
              src="/img/cart.svg"
              alt="cart-icon"
            />
            <span>{totalPrice} грн</span>
          </li>
          <li>
            <Link to="favourites">
            <img width={18} height={18} src="/img/favor.svg" alt="favorite" className="mr-20 cu-p"/>
            </Link>
          </li>
          <li>
          <Link to="orders">
            <img width={18} height={18} src="/img/user.svg" alt="user-icon" className="cu-p"/>
            </Link>
            
          </li>
        </ul>
      </header>
    )
}

export default Header;