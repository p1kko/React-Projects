import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import { AppContext } from "../../App";

function Card({
  id,
  name,
  price,
  imageUrl,
  onPlus,
  onFavourite,
  favourited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);

  const [isFavourite, setIsFavourite] = React.useState(favourited);

  const onClickPlus = () => {
    onPlus({ id, name, price, imageUrl });
  };

  const onClickFavourite = () => {
    setIsFavourite(!isFavourite);
    onFavourite({ name, price, imageUrl, id });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={187}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="136" y="79" rx="0" ry="0" width="1" height="1" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="105" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="129" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="172" rx="5" ry="5" width="80" height="24" />
          <rect x="114" y="164" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavourite && <div className={styles.favourite}>
            <img
              src={isFavourite ? "/img/heart-full.svg" : "/img/heart-empty.svg"}
              alt="Unliked"
              onClick={onClickFavourite}
            />
          </div>}
          <img width={133} height={112} src={imageUrl} alt="Sneakers" />
          <h5>{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column ">
              <span>Ціна</span>
              <b>{price}грн</b>
            </div>

            {onPlus && (
              <img
                onClick={onClickPlus}
                src={isItemAdded(name) ? "/img/check.svg" : "/img/plus.svg"}
                alt="add-item"
                className={styles.plus}
              />
            )}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Card;
