import React from "react";
import styles from "./Card.module.scss";

function Card({name, price, imageUrl, onPlus, onFavourite}) {
  const [isAdded, setIsAdded] = React.useState(false)

  const onClickPlus = () =>{
    onPlus({name, price, imageUrl});
    
    setIsAdded(!isAdded)
    
  }
  

  

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-empty.svg" alt="Unliked" onClick={onFavourite} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{price}грн</b>
        </div>

        <img
          onClick={onClickPlus}
          src= {isAdded ? "/img/check.svg" : "/img/plus.svg"}
          alt="add-item"
          className={styles.plus}
        />
      </div>
    </div>
  );
}

export default Card;
