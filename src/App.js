import React from 'react';
import Goal from './Goal';
import Login from './Login';
import Persons from './Persons';
import ListParent from './ListParent';

const App = (props) => {

  return (
    <div>
      
      {/* //todo IfCondition */}
      <Goal isGoal={true}/>

      {/* //todo IfCondition */}
      <Login isLogin={true} />

      {/* //* loop */}
      <Persons/>

      {/* //! props with loop */}
      <ListParent/>




    </div>
  )
}

export default App
