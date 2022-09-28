import React, { useEffect, useState } from 'react';
import { addToDb, getOrderList } from '../Fakedb/Fakedb';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    useEffect( ()=>{
        const storedOrderList = getOrderList();
        const savedCart = [];
        for(const id in storedOrderList){
            const addedMeals = meals.find(meal => meal.idMeal === id);
            if(addedMeals){
                const quantity = storedOrderList[id];
                addedMeals.quantity = quantity;
                savedCart.push(addedMeals);
            }
        }
        setCart(savedCart);
    }, [meals])
    const searchBtn = () =>{
        const searchFieldValue = document.getElementById('search-item');
        const searchFieldText = searchFieldValue.value;
        console.log(searchFieldText);
    }
    const btnHandler = (meal) =>{
        // console.log(meal)
        const newCart = [...cart, meal];
        setCart(newCart)
        addToDb(meal.idMeal)
    }
    return (
        <div>
            <div className='search'>
                <input id='search-item' type="text" />
                <button onClick={searchBtn} className='btn'>Search</button>
            </div>
           <div className='meals-container'>
             <div className="meal-sec">
                    {
                        meals.map(meal => <Meal
                            key = {meal.idMeal}
                            meal = {meal}
                            btnHandler = {btnHandler}
                        ></Meal>)
                    }
                </div>
              <div className="cart-sec">
                <Order cart = {cart}></Order>
              </div>
           </div>
        </div>
    );
};

export default Meals;