//  You need to paste the contents of this file into App.js
//  ctrl C --> ctrl V in App.js

import React, {useState} from "react";

function computeInitialCounter() {
    console.log('Some calculations ...')
    return Math.trunc(Math.random() * 20)
}

function App() {
    // const [counter, setCounter] = useState(0)
    // const [counter, setCounter] = useState(computeInitialCounter)
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'Couter',
        date: Date.now()
    })

    function increment() {
        setCounter((prevCounter) => {
            return prevCounter + 1;
        })
        setCounter(prev => prev + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function updateTitle () {
        setState(prev => {
            return {
                ...prev,
                title: 'New title counter'
            }
        })
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className='btn btn-success'>PLUS</button>
            <button onClick={decrement} className='btn btn-danger'>MINUS</button>
            <button onClick={updateTitle} className='btn btn-default'>CHANGE</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    )
}

export default App;
