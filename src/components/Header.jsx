

function Header(){
    return(
        <header className="d-flex justify-between align-center p-40">
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
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img
              width={18}
              height={18}
              className="mr-10"
              src="/img/cart.svg"
              alt="cart-icon"
            />
            <span>500 грн</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
          </li>
        </ul>
      </header>
    )
}

export default Header;