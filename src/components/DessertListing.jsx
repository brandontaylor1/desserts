import React, { useContext } from 'react'
import { DessertContext } from '../../context/DessertContext'

import DessertCard from './DessertCard'

const DessertListing = () => {
  const { desserts } = useContext(DessertContext)

  return (
    <div className='w-[100%] flex flex-wrap gap-x-[24px] gap-y-[32px]'>
        {desserts.map((item) => (
            <DessertCard 
              key={item.name}
              id={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
            />
        ))}
    </div>
  )
}

export default DessertListing