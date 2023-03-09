import styles from "./Card.module.scss";

function Card(props) {
  const onClickButton = () => alert("hi");

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img src="/img/heart-empty.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column ">
          <span>Цена</span>
          <b>{props.price}грн</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="add-item" />
        </button>
      </div>
    </div>
  );
}

export default Card;
