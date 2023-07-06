/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function FoodList({foods, DeleteFood, editFood}) {
    return (
       <ul>
           {foods.map((food, index) => (
               <li key={index}>
                   {food.name} - {food.calories}
                   <hr></hr>
                   <button className={'bg-green-500 hover:bg-red text-white font-bold py-2 px-2 rounded'} onClick={() => editFood(index)}>Edit</button>
                   <button className={'bg-red-500 hover:bg-yellow text-white font-bold py-2 px-2 rounded'} onClick={() => DeleteFood(index)}>Delete</button>
               </li>
           ))}
       </ul>
    );

}

export default FoodList;