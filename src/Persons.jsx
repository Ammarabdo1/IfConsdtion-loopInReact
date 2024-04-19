import React from 'react'

const Persons = () => {

    const Users = ['Abdo' ,'Atyat', 'Yasmen'  , 'Ahmed'  , 'Mariam' ,'Ammar', 'Yousef', 'Habiba' , 'Salman' ]

    const print = Users.map((user)=> <h4>{user}</h4> )
  return (
    <div>
        {print}

    </div>
  )
}

export default Persons