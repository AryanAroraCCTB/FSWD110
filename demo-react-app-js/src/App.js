import {useState} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let [count, setCount] = useState(0);

  const incrementCountHandler_2 = (event, num) => {
        setCount(count + num); 
        console.log(`Counter updated to: ${count}`, event);
    }
  return (
    <div className="App">
      Counter: {count}

            <div>
                <button onClick={(event) => incrementCountHandler_2(event, 10)}>+1</button>
            </div>
    </div>
  );
}

export default App;
