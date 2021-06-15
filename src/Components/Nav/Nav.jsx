import "./Nav.css";
import { NavLink } from 'react-router-dom'
import { Home, Search, Post, Profile, Logout } from '../../Svg'
import { useSelector } from 'react-redux'
export function Nav() {
    const { globalState: { route } } = useSelector(state => state)
    console.log(route)
    return (
        <nav className="nav">
            <NavLink to="/">
                <span className={route === "Home" ? "active" : "in-active"}><Home /></span>
            </NavLink>
            <NavLink to="/search">
                <span className={route === "Search" ? "active" : "in-active"}><Search /></span>
            </NavLink>
            <NavLink className="post" to="/create-post">
                <span className={route === "Post" ? "active" : "in-active"}><Post /></span>
            </NavLink>
            <NavLink to="/profile">
                <span className={route === "Profile" ? "active" : "in-active"}> <Profile /></span>
            </NavLink>
            <NavLink to="/">
            <span className={route === "Logout" ? "active" : "in-active"}><Logout /></span>
            </NavLink>
        </nav>
    );
}