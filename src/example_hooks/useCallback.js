import { useState, useCallback } from "react";
import Todos from "./Todos";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback (() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

//Todos компонент буде повторно рендеритися лише тоді, коли todos проп змінюється.
    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button className='btn btn-success' onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App