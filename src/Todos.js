import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index}>{todo}</p>;
            })}
            <button className='btn btn-success' onClick={addTodo}>Add Todo</button>
        </>
    );
};

export default memo(Todos);