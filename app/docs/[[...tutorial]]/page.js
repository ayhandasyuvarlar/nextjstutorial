import React from 'react'

const Docs = ({params}) => {
  console.log(params)
  return (
    <div>
      Docs sayfasi {params.tutorial}
    </div>
  )
}

export default Docs
