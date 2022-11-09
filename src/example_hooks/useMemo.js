import React, {useState, useEffect, useMemo} from "react";

function complexCompute(num) {
    console.log('complex compute')
    let i = 0
    while (i < 10000000) i++
    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }),[colored])

    const computed = useMemo(() => {
        return complexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('styles changed')
    }, [styles])

    return (
        <div>
            <h1 style={styles}>Сomputed Property: {number}</h1>
            <button className={'btn btn-success'} onClick={() => setNumber(prev => prev + 1)}>Plus</button>
            <button className={'btn btn-danger'} onClick={() => setNumber(prev => prev - 1)}>Minus</button>
            <button className={'btn btn-warning'} onClick={() => setColored(prev => !prev)}>Сhange</button>
        </div>
    )
}

export default App;