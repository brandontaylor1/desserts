import React, { useContext } from 'react'

import { DessertContext } from '../../context/DessertContext'

import { CartButton } from '../styled-components/Button'

import carbonNeutralImage from '../assets/icon-carbon-neutral.svg' // Adjust the path as needed



const CartOrder = () => {

  const { cartItems, setModal } = useContext(DessertContext);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleOrder = () => {
    if(cartItems.length > 0 ) {
      setModal(true)
      }
}

  return (
    <>
      <div className='flex flex-col'>
          <div className='flex flex-row items-center justify-between mt-[24px] '>
              <p className='text-preset-4'>Order Total</p>
              <p className='text-preset-2'>${totalPrice.toFixed(2)}</p>
          </div>
          <div className='w-full bg-[var(--primary-rose-50)] mt-[24px] mb-[24px] flex items-center justify-center rounded-md'>
            <img src={carbonNeutralImage} alt="" />
              <p className='flex items-center h-[56px] text-preset-4 text-[var(--primary-rose-900)]'>This is a&nbsp;<span className='text-[var(--primary-rose-900)]'> carbon-neutral</span>&nbsp;delivery</p>
          </div>
              <CartButton
                onClick ={handleOrder}
                >
                Confirm Order</CartButton>
        </div>
    </>
  )
}

export default CartOrder