import React from 'react'
import TeamCard from './TeamCard'

const Team = ({user}) => {

  return (
    <div>
      <TeamCard passedUser={user}/>
    </div>
  )
}

export default Team