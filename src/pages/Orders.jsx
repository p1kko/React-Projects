import React from "react";
import Card from "../components/Card";
import axios from "axios";


function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://json-mock-sneakers.onrender.com/orders");
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказа');
      }
    })();
  }, []);


  const arrayFake = new Array(10).fill({})

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Мои Заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        
        {
       
        (isLoading ?  arrayFake : orders).map((item) => (
          <Card
            key={item.imageUrl}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            loading={isLoading}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
