

import { useState, useEffect } from 'react';
const style1 = {
    backgroundColor: "rgb(120,225,160)",
    color: "white",
    fontSize: "40px"
}

function Todos() {
    const [todos, settodo] = useState([]);
    useEffect(() => {
        const fetchData = async function get() {
            try {
                const body = await fetch('https://jsonplaceholder.typicode.com/todos')
                const data = await body.json();
                settodo(data);

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div style={style1}>
            {todos.map(todo => (<ul><li>{todo.completed ? "true" : "false"},{todo.title}</li></ul>))}
        </div>

    )
}


export default Todos