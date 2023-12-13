
import React from "react";
import './../styles/App.css';
import { useState } from "react";
const App = () => {
  const [count, onclick] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
    <button onClick={()=> onClick(count+1)}>Click me</button>
    </div>
  )
}

export default App
