import { useState, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

 
  return (
    <div className="App card container">
        Hello
    </div> 
  ); 
} 
 
export default App;
