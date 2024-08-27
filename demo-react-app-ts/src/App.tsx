import React, {useState, useEffect} from 'react';
import { Greetings } from './Greetings';
import { Counter } from './Counter';
import { DocumentTitle } from './DocumentTitle';
import './App.css';

interface User {
  name: string,
  color: string
}

export const App = () => {
  const [users, setUsers] = useState([] as User[]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    console.log('Fetching Data...');

    setTimeout(() => {
      console.log('Data Received');

      setUsers([
        { name:'Alice', color:'blue' },
        { name:'Bob', color:'green' },
        { name:'Cam', color:'orange '}
      ]);

      setLoading(false);

    }, 3000);
  }

  useEffect(() => {
    getData();
  }, []);

  // getData();

  const user_greetings = users.map((user, index) => {
    return <Greetings key={index} name={user.name} color={user.color}/>
  });

  return (
    <div className="App">
      <div>I am App Component!</div>

      {user_greetings}

      <hr/>

      {
        loading ? <p>Loading...</p> 
        : users.map((user, index) => {
            return <Greetings key={index} name={user.name} color={user.color}/>
          })
      }

      <hr/>

      { loading ? <Counter/> : ''}

      <button onClick={(e) => setLoading(true)}>Hide Document Title</button>

      { !loading ? <DocumentTitle/> : ''}
    </div>
  );
}

