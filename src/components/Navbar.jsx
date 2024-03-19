


import { Link } from 'react-router-dom';
const style = {
    height: "100px",
    "backgroundColor": "rgb(128,109,64)",
    color: "green",
    display: "flex",
    gap: "90px"




}
const style1 = {
    fontSize: "60px",
    "color": "green",

}

const style2 = {
    marginLeft: "100px",
    "color": "rgb(56,31,58)",
}
function Navbar() {
    return (
        <div style={style1}>

            <nav style={style}>
                <Link style={style2} to="/">Home</Link>
                <Link style={style2} to="/Users">Users</Link>
                <Link style={style2} to="/Posts">Posts</Link>
                <Link style={style2} to="/Todos">Todos</Link>
            </nav>
        </div>

    );
}

export default Navbar;
