import React from 'react'
import MadeGoal from './madeGoal'
import MissedGoal from './missedGoal'

const Goal = (props) => {
    const IsGoal = props.isGoal
  return (
    <div>
        {IsGoal ? <MadeGoal/> : <MissedGoal/>}
    </div>
  )
}

export default Goal