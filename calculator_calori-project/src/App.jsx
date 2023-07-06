import { useState } from 'react';
import './App.css';
import Form from './assets/components/Crud/Form';
import Header from './assets/components/Header';
import FoodList from './assets/components/Crud/FoodList';

function App() {
    const [foods, setFoods] = useState([]);

    //Add food
    const addFood = (food) => {
        setFoods([...foods, food]);
    };
    //remove
    // eslint-disable-next-line no-unused-vars
    const DeleteFood = (index) => {
        setFoods(foods.filter((food, i) => i !== index));
    }
    const totalcalories = foods.reduce((total, food) => total + food.calories, 0);
    return (
        <>
            <Header title={'Calorie Calculator'} />
            <Form addFood={addFood}  />
            <FoodList foods={foods} removeFood={DeleteFood} />
            <div className="calorie">
                <h1>Total Calories: {totalcalories}</h1>
            </div>
        </>
    );
}

export default App;
