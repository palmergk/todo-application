import React from 'react'

const Buttoncomponent = ({title, PerformMovement}) => {
  return (
    <>
      <button className='btn' onClick={PerformMovement} >{title}</button>
    </>
  )
}

export default Buttoncomponent