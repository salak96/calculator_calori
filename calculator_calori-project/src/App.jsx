import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Crud/Form';
import FoodList from './components/Crud/FoodList';

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
        <div className={'relative flex flex-col justify-center min-h-screen overflow-hidden'}>
            <Header title={'Calorie Calculator'} />
            <Form addFood={addFood}  />
            <FoodList foods={foods} DeleteFood={DeleteFood} />
            <div className={'text-3xl '}>
                <h1>Total Calories: {totalcalories}</h1>
            </div>
        </div>
    );
}

export default App;
