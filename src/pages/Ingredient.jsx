import React, { useEffect, useState } from 'react'
import IngredientBanner from '../components/IngredientBanner';
import IngredientCard from '../components/IngredientCard';
import Appliances from '../components/Appliances';

const Ingredient = () => {
  const [inData,setInData] = useState("");
  

    useEffect(()=>{
        fetch("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
        .then((res)=>res.json())
        .then(data=>setInData(data));
    },[])

  return (
    <div className='lg:w-2/3 mx-auto p-4'>
      {inData && <IngredientBanner name={inData.name} time={inData.timeToPrepare}/>}
      
      <div>
        <div className='text-3xl font-semibold mb-2'>Ingredients</div>
        <div className='text-[#8A8A8A]'>For 2 people</div>
        <div className='border-b-2 border-b-[#D6D6D6CE] m-9'></div>
        {inData && <IngredientCard card={inData.ingredients.vegetables} cardName={"Vegetables"}/>}
        {inData && <IngredientCard card={inData.ingredients.spices} cardName={"Spices"}/>}
        <div className='text-2xl font-semibold'>Appliances</div>
        <Appliances/>
      </div>
    </div>
  )
}

export default Ingredient