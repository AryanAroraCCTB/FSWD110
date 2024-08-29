import React, { useState, useEffect } from 'react';


export const Counter = (props: any) => {
    let [count, setCount] = useState(0);
    let [fname, setFname] = useState('');

    useEffect(() => {
        console.log("useEffect got triggered on every render");
    });

    useEffect(() => {
        console.log("useEffect got triggered on load");
    }, []);

    useEffect(() => {
        console.log("useEffect got triggered on count", count);
    }, [count]);

    useEffect(() => {
        console.log("useEffect got triggered on fname", fname);
    }, [fname]);

    useEffect(() => {
        console.log("useEffect got triggered on count or fname", count, fname);
    }, [count, fname]);
    
    const incrementCountHandler = (event?: any) => { 
        setCount(count + 1); 
        // console.log(`Counter updated to: ${count}`, event);

        const targetButton = event.target;
        targetButton.style = 'color: green;';
    }

    const incrementCountHandler_2 = (num: number) => {
        setCount(count + num); 
        console.log(`Counter updated to: ${count}`);
    }

    const decrementCountHandler = (event: any) => { 
        setCount(count - 1); 
        // console.log(`Counter updated to: ${count}`, event);

        const targetButton = event.target;
        targetButton.style = 'color: red;';
    }

    const nameChangeHandler = (event: any) => {
        // console.log('Typing...', event.target.value);
        setFname(event.target.value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        // console.log("Form Submitted");
    }

    return (
        <div>
            Counter: {count}

            <div>
                <button onClick={incrementCountHandler}>+1</button>
                <button onClick={() => incrementCountHandler_2(10)}>+1</button>
                <button onClick={decrementCountHandler}>-1</button>
            </div>

            <form 
                style={
                    {
                        margin: '30px',
                        padding: '5px',
                        border: '2px solid green'
                    }
                }
                onSubmit={submitHandler}
            >
                <div>
                    <label htmlFor='FirstName'>First Name</label>
                    <input name='FirstName' type='text' onChange={nameChangeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>


            <div>
                {fname ? <p>First Name: {fname}</p> : ''}
            </div>
        </div>
    );
}