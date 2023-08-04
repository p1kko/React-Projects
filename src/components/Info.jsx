import React from 'react'
import { AppContext } from '../App';

const Info = ({image, title, description}) => {
const {setCartOpened} = React.useContext(AppContext)

  return (
    <div className="mb-50 emptyCart ">
    <img
      width={60}
      height={60}
      src={image}
      alt="Empty-Cart"
    />
    <h2>{title}</h2>
    <p className="opacity-6">{description}</p>
    <button onClick={()=> setCartOpened(false)}>повернутися назад</button>
  </div>
  )
}

export default Info;
