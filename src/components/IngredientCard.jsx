import React from 'react'

const IngredientCard = ({card,cardName}) => {
    console.log(card)
  return (
    <div>
        <div className='text-2xl font-semibold flex mb-3'>{cardName}({card.length>9?card.length:"0"+card.length})<img src='/open.svg' alt='open' className='ml-4 w-4'/></div>
        <div>
            {card && card.map((item)=>(
                <div className='flex justify-between items-center'>
                    <div>{item.name}</div>
                    <div>{item.quantity}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default IngredientCard