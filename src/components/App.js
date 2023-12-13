
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [count, clickIncrease] = useState(0);
   function clickIncrease(count){
        count+1;
   }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
    <button onClick={clickIncrease}>Click me</button>
    </div>
  )
}

export default App
