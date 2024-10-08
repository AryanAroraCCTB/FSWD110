import React, { useState, useEffect } from 'react';


export const Counter = (props: any) => {
    let [count, setCount] = useState(0);
    let [fname, setFname] = useState('');
    let [lname, setLname] = useState('');

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

    const fnameChangeHandler = (event: any) => {
        console.log('Typing...', event.target.name, event.target.value);
        
        // const { name, value } = event.target;
        const name = event.target.name;
        const value = event.target.value;

        setFname(value);
    }

    const lnameChangeHandler = (event: any) => {
        console.log('Typing...', event.target.name, event.target.value);
        
        // const { name, value } = event.target;
        const name = event.target.name;
        const value = event.target.value;

        setLname(value);
    }

    const submitHandler = (event: any) => {
        event.preventDefault();
        // console.log("Form Submitted");
        alert(`Form submitted with input: ${fname}`);
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
                    <input name='FirstName' type='text' value={fname} onChange={fnameChangeHandler}/>
                    <input name='LastName' type='text' value={lname} onChange={lnameChangeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>


            <div>
                {fname ? <p>First Name: {fname}</p> : ''}
            </div>
        </div>
    );
}