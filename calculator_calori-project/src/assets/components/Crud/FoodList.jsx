/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function FoodList({foods}) {
    return (
       <ul>
           {foods.map((food, index) => (
               <li key={index}>
                   {food.name} - {food.calories}
               </li>
           ))}
       </ul>
    );
}

export default FoodList;