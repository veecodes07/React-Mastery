import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [Counter, setCounter] = useState(15) //this is how hooks are used. Counter is the variable declared
  //and sETcOUNTER IS A A FUNCTION WHICH SETS AND UPDATES THE VALUE OF COUNTER IN UI.

  //let Counter = 5;

  

 
  
      let addValue = () => {
        console.log("value is added ", Counter);
        Counter = Counter + 1
        setCounter(Counter);
      }
   
    let rmValue = () => {
      Counter = Counter - 1;
      setCounter(Counter)
      console.log("removed", Counter);
    }
  

  
  

  return (
    <>
    <h1> Vgod React</h1>
    <h2> Counter Value: {Counter}</h2>
    <button onClick={addValue}>Add Value </button> 
    <br/>
    <button onClick={rmValue}>Remove Value </button>

     <footer> footer : {Counter} </footer>
      
    </>
  )
}

export default App
