import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
    const categories = [
        {
            id:"italian",
            name:"Italian"
        },
        {
            id:"indian",
            name:"Indian"
        },
        {
            id:"chinese",
            name:"Chinese"
        },,
        {
            id:"mexican",
            name:"Mexican"
        },
        {
            id:"japanese",
            name:"Japanese"
        },
    ]
  return (
    <div className='flex justify-center sm:justify-between flex-wrap gap-2 items-center mt-8'>
        {categories.map((card)=>(
            <CategoryCard card={card} key={card.id}/>
        ))}
    </div>
  )
}

export default Categories