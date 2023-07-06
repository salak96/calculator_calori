/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function FoodList({foods,DeleteFood}) {
    return (
       <ul>
           {foods.map((food, index) => (
               <li key={index}>
                   {food.name} - {food.calories}
                   <button onClick={() => DeleteFood(index)}>Remove</button>
               </li>
           ))}
       </ul>
    );
}

export default FoodList;