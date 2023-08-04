import React from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";

function Drawer({ onRemove, onCloseCart, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post("https://json-mock-sneakers.onrender.com/orders", {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("не вдалося сформувати замовлення");
    }
  };
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

        {items.length > 0 ? (
          <div className="flex d-flex flex-column">
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
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
                    onClick={() => onRemove(obj.id)}
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul className="cartTotalBlock">
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice}грн</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} грн</b>
                </li>
              </ul>
              <button onClick={onClickOrder}>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення сформоване" : "Корзина порожня"}
            description={
              isOrderComplete
                ? `Ваше замовлення # ${orderId} у найближчий час буде відправлено`
                : "Додайте хоча б одну пару в замовлення"
            }
            image={isOrderComplete ? "/img/order.svg" : "/img/empty-cart.svg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
