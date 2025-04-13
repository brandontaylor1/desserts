import React, { useContext } from 'react'

import MainContent from '../components/MainContent'
import CartContent from '../components/CartContent'
import OrderModal from '../components/OrderModal'

import { DessertContext } from '../../context/DessertContext'

const MainContainer = () => {

const { modal } = useContext(DessertContext)

  return (
    <>
      <section className='flex flex-col items-center justify-center w-full h-auto px-[112px] py-[88px] bg-[var(--primary-rose-50)]'>
          <div className='flex flex-row justify-center bg-[var(--primary-white)] p-4 shadow-md/50 w-full max-w-[1440px] h-auto'>
            <div className='flex flex-col'>
                <h1 className='text-preset-1 mb-[32px]'>Desserts</h1>
                <MainContent />
              </div>
              <div className='sticky top-0'>
                <CartContent />    
              </div>  
          </div>
          {modal && <div className='flex items-center justify-center fixed inset-0 bg-black/50 z-10 '>
          <OrderModal />
          </div>}
      </section>
    </>
  )
}

export default MainContainer