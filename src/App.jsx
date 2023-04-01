import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Favourites from "./pages/Favourites";
import Orders from "./pages/Orders";
import Footer from "./components/Footer/Footer"


export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favourites, setIsFavourites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);



  React.useEffect(() => {
    async function fetchData() {
      try {
        const cartResponse = await axios.get('https://react-app-gapchenko.netlify.app//api/cart');
        const favorResponse = await axios.get("https://react-app-gapchenko.netlify.app//api/favor");
        const itemResponse = await axios.get("https://react-app-gapchenko.netlify.app//api/sneakers");

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setIsFavourites(favorResponse.data);
        setItems(itemResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((cartObj) => cartObj.name === obj.name)) {
      axios.delete(`http://localhost:3001/cart/${obj.name}`);
      setCartItems((prev) => prev.filter((item) => item.name !== obj.name));
    } else {
      axios.post("http://localhost:3001/cart", obj);
      setCartItems([...cartItems, obj]);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favourites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`http://localhost:3001/favor/${obj.id}`);
        setIsFavourites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post("http://localhost:3001/favor", obj);
        setIsFavourites([...favourites, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки!");
    }
  };

  const onRemoveCartItem = (id) => {
    axios.delete(`http://localhost:3001/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeInputValue = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (name) => {
    return cartItems.some((obj) => obj.name === name);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favourites,
        items,
        isItemAdded,
        onAddToFavourite,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        
        {cartOpened && (
          <Drawer
            items={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemove={onRemoveCartItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeInputValue={onChangeInputValue}
                onAddToFavourite={onAddToFavourite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route path="/favourites" element={<Favourites />} />

          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
      <Footer />
    </AppContext.Provider>
    
  );
}

export default App;
