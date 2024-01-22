// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './component/card/Card';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://api.publicapis.org/entries')
      .then(response => setData(response.data.entries))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app">
      {data.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default App;
