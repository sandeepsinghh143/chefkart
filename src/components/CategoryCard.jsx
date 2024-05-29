import React from 'react'

const CategoryCard = ({card}) => {
  return (
    <div className='border border-black px-8 py-1 rounded-3xl min-w-32'>{card.name}</div>
  )
}

export default CategoryCard