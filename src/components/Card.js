
function Card(){
    return(
        <div className="card">
            <div className="favourite">
              <img src="/img/heart-empty.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/Sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена</span>
                <b>5499грн</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="add-item"
                />
              </button>
            </div>
          </div>
    )
}

export default Card;