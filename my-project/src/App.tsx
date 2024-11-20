import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './components/my_first_component/header';
import { FormComponent } from './components/formComponent/formComponent';

function App() {
  return (
    <div className="App">
      {/* <MyFirstComponent/> */}
      <FormComponent/>
    </div>
  );
}

export default App;
