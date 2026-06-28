import { Link } from "react-router-dom"
import "../css/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-div">
                <Link to="/">Media App</Link>
            </div>
            <div className="navbar-links">
                <Link className="navbar.link" to="/">Home</Link>
                <Link className="navbar.link" to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}

export default Navbar