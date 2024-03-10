import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick(){
    alert('Button clicked');
  }
  const handleClick2 = () => {
    alert('Button two Clicked');
  }
  const clickFour = (num) => {
    alert(num + 4)
  }
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> {alert('third button is clicked')}}>Click Me Third</button>
      <button onClick={() => clickFour(4)}>Click Four</button>
      
    </>
  )
}

export default App
