import React, {useState} from 'react';
import './Counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter((prev) => prev + 1)
    }
    const decrement = () => {
      setCounter((prev) => prev - 1)
    }
    const changeCounter = (val) => {
        console.log(val.target.value);
        setCounter((prev) => prev = val.target.value ? val.target.value : 0)
        console.log(counter);
    }

    const ref = () => {
        React.createRef();
        new Event('input', { bubbles: true });
    }

    return (
        <div>
            <h1>
                <button onClick={decrement}>-</button>
                <input readOnly type="number" value={counter} onChange={(e) => {changeCounter(e)}} ref={ref}/>
                <button onClick={increment}>+</button>
            </h1>
        </div>
    );
}

export default Counter;