import React from 'react';
import './Meal.css'

const Meal = ({meal, btnHandler}) => {
    const {strMeal, strInstructions, strMealThumb} = meal;
    // console.log(strMeal);
    return (
        <div className='meal-div'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>Instraction: {strInstructions.slice(0, 200)}...</p>
            <button onClick={()=>btnHandler(meal)} className='order-btn'>Order Now</button>
        </div>
    );
};

export default Meal;