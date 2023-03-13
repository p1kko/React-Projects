function Drawer({ onCloseCart, items =[] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина{" "}
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
            onClick={onCloseCart}
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"
              ></div>
              <div className="mr-20">
                <p className="mb-5">{obj.name}</p>
                <b>{obj.price}грн</b>
              </div>
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>)
            
          )}
        </div>

        <div className="cartTotalBlock">
          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Итого:</span>
              <div></div>
              <b>10432грн</b>
            </li>
            <li className="d-flex">
              <span>Налог 5%:</span>
              <div></div>
              <b>521.6 грн</b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
