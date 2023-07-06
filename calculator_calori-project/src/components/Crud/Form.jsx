/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
function Form({addFood}) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name&&calories){
            addFood({name,calories:parseInt(calories)});
            setName('');
            setCalories('');
        }
    console.log(handleSubmit);
    }
    return (
        <div className='flex justify-center mt-100'>
            <div className='w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl'>
                <h1 className='text-3xl font-semibold text-center text-indigo-700  uppercase decoration-wavy'>Input Calorie</h1>
                <form className='mt-6'>
                    <div className='mb-2'>
                        <label>
                            <span className='text-gray-700'>Food</span>
                            <input
                                type='text'
                                name='Food name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='
                               
              w-full
              block px-16 py-2 mt-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
                                placeholder='Banana'
                            />
                        </label>
                    </div>
                    <div className='mb-2'>
                        <label>
                            <span className='text-gray-700'>Calorie</span>
                            <input
                                name='calorie'
                                type='number'
                                value={calories}
                                onChange={(e) => setCalories(e.target.value)}
                                className='
              block
              w-full
              mt-2 px-16 py-2
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            '
                                placeholder='Calorie'
                                required
                            />
                        </label>
                    </div>
                    <div className='mb-2'>
                        <button
                         onClick={handleSubmit}
                            type='submit' 
            className='
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            '
                        >
                            Tambahkan
                        </button>
                       
                    </div>
                    <div></div>
                </form>
            </div>
        </div>
    );
}

export default Form;
