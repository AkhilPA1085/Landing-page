import React from 'react'

const ContainerWrapper = ({children}) => {
  return (
    <div className='container mx-auto md:px-28'>{children}</div>
  )
}

export default ContainerWrapper