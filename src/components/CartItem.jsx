import React, { useContext } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { DessertContext } from '../../context/DessertContext';

const CartItem = ({ item }) => {

  const { removeFromCart } = useContext(DessertContext)

  const handleTotal = (item.quantity * item.price).toFixed(2);
  return (
    <>
        <div className='w-full flex flex-row items-center justify-between'>
            <div>
                <p className='text-preset-4-bold text-[var(--primary-rose-900)] mt-[16px]'>{item.name}</p>
                <div className='flex flex-row items-center w-[100%] gap-2 mb-[16px]'>
                    <p className='text-preset-bold-4 text-[var(--primary-red)]'>{item.quantity}x</p>
                    <p className='text-preset-4'> @ ${item.price.toFixed(2)}</p>
                    <p className='text-preset-4-bold text-[var(--primary-rose-500)]'>${handleTotal}</p>
                </div>
            </div>
            <AiOutlineCloseCircle 
                className='text-[var(--primary-ro.se-500)] cursor-pointer' 
                size={20}
                onClick={() => removeFromCart(item.id)}
                />
          </div>
        <div className='border-1 border-[var(--primary-rose-100)]'> </div>
    </>
  )
}

export default CartItem