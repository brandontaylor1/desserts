import React, { useContext } from 'react'
import { DessertContext } from '../../context/DessertContext'

import {emptyCartImage} from '../assets/icon-add-to-cart.svg'

import CartItem from './CartItem'
import CartOrder from './CartOrder'

const CartContent = () => {
  const { cartItems } = useContext(DessertContext)

  return (  
    <>
      <div className='w-[384px] h-[auto] p-3 sticky top-0 bg-[var(--primary-white)] '>
        <div className='flex flex-row items-center justify-between'>
          <h1 className='text-preset-2 text-left text-[var(--primary-red)]'>Your Cart ({cartItems.length})</h1>
          <p className='text-xs font-bold'>{cartItems > 0 ? "CLEAR ALL" : " "}</p>
        </div>

        {cartItems.length === 0 ? (
          <div className='flex flex-col item-center justify-center text-center'>
            <img 
            className='w-full h-auto mt-[24px] mb-[16px]'
            src={emptyCartImage}/>
            <p className='text-preset-4-bold text-[var(--primary-rose-500)]'>Your added items will appear here</p>
          </div>
        ): (
          <div>
            <ul>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
              <CartOrder />
          </div> 
        )}
      </div>
    </>
    
  )
}

export default CartContent