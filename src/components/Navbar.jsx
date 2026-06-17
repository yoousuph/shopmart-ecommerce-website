import { Link } from "react-router-dom"
// import Home from "./pages/Home"

export default function Navbar() {

    return (

        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-brand"> ShopMart </Link>
                </div>
                <div className="navbar-links">
                    <Link to="/" className="navbar-link">
                    Home
                    </Link>
                    <Link to="/" className="navbar-link">
                    Products
                    </Link>
                    <Link to="/" className="navbar-link">
                    About Us
                    </Link>
                </div>
                <div className="navbar-auth">
                    <div className="navbar-auth-links">
                        <Link to="/auth" className="btn btn-secondary">
                            Login
                        </Link>
                        <Link to="/auth" className="btn btn-primary">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )

}