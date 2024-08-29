import React from 'react';

export const JSX = () => {
    const fruits = ['Apple', 'Apple', 'Banana', 'Cherry', 'Apple', 'Apple', 'Banana', 'Cherry'];
    
    const elements = fruits.map((fruit, index) => {
        return (
            <p key={index}>Fruit #{index+1} is {fruit}</p>
        )
    });

    console.log(elements);
    
    return (
        <div>
            <div className='JSX'>
                Hi I am JSX
            </div>
            {elements}
        </div>
    );
}

