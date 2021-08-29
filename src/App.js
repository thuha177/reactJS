import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const name = 'Ha';
  const age = 18;
  const isFemale = true;
  const student = {
    name: 'Easy Frontend'
  };
  const colourList = ['red', 'green', 'blue']

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ha Nguyen
        </p>
        <p>Xin chao {name} - {age} - {isFemale ? 'Female' : 'Male'} </p>
        {isFemale ? <p>Female</p> : <p>Male</p>}

        {isFemale && <p>Female</p>}
        {!isFemale && <p>Male</p>}

        {isFemale && (
          <div>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </div>

        )}
        {isFemale && (
          <React.Fragment>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </React.Fragment>

        )}

        {isFemale && (
          <>
            <p>Female 1</p>
            <p>Female 2</p>
            <p>Female 3</p>
          </>

        )}

        <p>{student.name}</p>

        <ul>
          {colourList.map(color => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
