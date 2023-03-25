import React from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";

function Drawer({ onRemove, onCloseCart, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const onClickOrder = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/orders",
        {items: cartItems}
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert("не удалось создать заказ");
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
                  <b>10432грн</b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>521.6 грн</b>
                </li>
              </ul>
              <button onClick={onClickOrder}>Оформить заказ</button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ # ${orderId} вскоре будет передан нашему курьеру`
                : "Добавьте хотя бы одну пару в заказы"
            }
            image={isOrderComplete ? "/img/order.svg" : "/img/empty-cart.svg"}
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
