import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState("Anmol Tomar");
  const [toggle, setToggle] = useState(true);

  const changeName = () => {
    if (toggle) {
      setFirstName("Abhay Gupta");
    } else {
      setFirstName("Anmol Tomar");
    }
    setToggle(!toggle);
  };

  return (
    <div className='App'>
      <h1>{firstName}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default App;

