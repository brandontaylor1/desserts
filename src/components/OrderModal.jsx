import React, { useContext } from 'react'

import { DessertContext } from '../../context/DessertContext'

import { CartButton } from '../styled-components/Button'

import checkmark from '../assets/icon-order-confirmed.svg'

const OrderModal = () => {
    
    const { cartItems } = useContext(DessertContext);
    
    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

  return (
        <div className='bg-white text-black w-[592px] h-auto rounded-2xl flex flex-col absolute z-999 p-[40px]'
            onClick={(e) => e.stopPropagation()}
        >
            <img src={checkmark}
                className='w-[48px] h-[48px]' />
            <h1 className='text-preset-1 text-black mt-[24px]'>Order Confirmed!</h1>
            <p className='text-preset-4 text-[var(--primary-rose-500)] mt-[8px]'>We hope you enjoy your food!</p>
            <div className='w-full bg-[var(--primary-rose-50)] mt-[32px] rounded-lg'>
                {cartItems.map((item) => (
                    <div key={item.id} className='flex flex-row items-center justify-between mt-[16px] px-[24px] mb-[33px]'>
                        <div className='flex flex-row items-center gap-4 border-b-1 border-[var(--primary-rose-100)] pb-[10px]'>
                            <img 
                            className='w-[48px] h-[48px] rounded-lg'
                            src={item.image.thumbnail} alt="dessert thumbnail" />
                            <div>
                                <p className='text-preset-4-bold text-[var(--primary-rose-900)]'>{item.name}</p>
                                <div className='flex flex-row items-center gap-2'> 
                                    <p className='text-preset-4-bold text-[var(--primary-red)]'>{item.quantity}x</p>
                                    <p className='text-preset-4 text-[var(--primary-rose-500)]'> @ ${item.price.toFixed(2)}</p>

                                </div>
                            </div>
                        </div>

                        <p className='text-preset-4-bold text-[var(--primary-red)]'>${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                ))}

            <div className='flex flex-row items-center justify-between mt-[24px] bg-[var(--primary-rose-50)] p-[24px]'>
              <p className='text-preset-4'>Order Total</p>
              <p className='text-preset-2'>${totalPrice.toFixed(2)}</p>
          </div>
            </div>
            <CartButton
                onClick={() => window.location.reload()}
            >
                <p className='text-preset-3'>Start New Order</p>
            </CartButton>
        </div>
   
  )
}

export default OrderModal