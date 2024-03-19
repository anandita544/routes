import { useState, useEffect } from 'react';
const style1 = {
    backgroundColor: "rgb(161,186,137)",
    color: "white",
    fontSize: "40px"
}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData = async function get() {
            try {
                const body = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await body.json();
                setUsers(data);

            }
            catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [])


    return (
        <div style={style1}>
            {users.map(user => (<p>{user.name}</p>))}
        </div>

    )
}

export default Users;