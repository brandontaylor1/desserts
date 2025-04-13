import React, { useContext, useState } from 'react'

import { DefaultButton } from '../styled-components/Button'
import { DessertContext } from '../../context/DessertContext.jsx'
import { ActiveButton } from '../styled-components/Button'

const DessertCard = React.memo(({ image: { desktop, thumbnail, mobile, tablet }, name, category, price, id}) => {

  const { cartItems, addToCart, incrementQuantity, decrementQuantity } = useContext(DessertContext)

  const itemInCart = cartItems?.find((i) => i.id === id);
  const cartCount = itemInCart ? itemInCart.quantity : 0;

  const [ buttonClicked, setButtonClicked ] = useState(false)

  const dollarAmount = typeof price === 'number' ? price.toFixed(2) : '0.00';

  const handleAddToCart = () => {
    addToCart({id, name, category, price, image:{desktop, thumbnail, mobile, tablet}});
    setButtonClicked(true);
  }

  const handleIncrement = () => {
    incrementQuantity(id);
  }

  const handleDecrement = () => {
    decrementQuantity(id);
    if(cartCount - 1 === 0) {
      setButtonClicked(false)
    }
  }
  
  return (
    <div className='h-auto w-[250px] flex flex-col'>
        <div className="image-container flex flex-col items-center justify-center mb-[16px]">
            <img 
              className='rounded-lg relative z-[-10] shadow-md'
              src={desktop} alt="card image" />
            {buttonClicked && cartCount > 0 ? (
              <ActiveButton
              cartCount={cartCount}
              incrementCount={handleIncrement}
              decrementCount={handleDecrement}
              >{cartCount}
            </ActiveButton>) : (
              <DefaultButton onClick={handleAddToCart}
              >Add To Cart</DefaultButton>
            )}
            
        </div>
        
        <div className='card-content'>
            <p className='text-preset-4 text-[var(--primary-rose-500)]'>{category}</p>
            <h2 className='text-preset-3 text-[var(--primary-rose-900)]'>{name}</h2>
            <h3 className='text-preset-3 text-[var(--primary-red)]'>${dollarAmount}</h3>
        </div>
         <p className='text'></p>
    </div>
  )
});

export default DessertCard