import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  { name: "Мужские Кроссовки Nike Air Max 270", price: "5499" , imageUrl:"/img/Sneakers/1.jpg"},
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "7600", imageUrl:"/img/Sneakers/2.jpg" },
  { name: "Мужские Кроссовки Nike Kyrie 7", price: "3300", imageUrl:"/img/Sneakers/3.jpg" },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: "4359", imageUrl:"/img/Sneakers/4.jpg" },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
       
          {arr.map((obj) => (
            <Card name={obj.name} price={obj.price} imageUrl={obj.imageUrl}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
