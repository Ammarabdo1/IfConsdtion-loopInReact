import React from 'react'
import List from './List'

const ListParent = () => {
    const cars = ['Audi' , 'BMW' , 'Ford']
  return (
    <div>
        {cars.map((car)=><List Brand={car} />)}
    </div>
  )
}

export default ListParent