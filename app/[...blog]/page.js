import React from 'react'

const Blog = ({params}) => {
  console.log(params)
  return (
    <div>
      blog sayfasi {params.blog}
    </div>
  )
}

export default Blog
