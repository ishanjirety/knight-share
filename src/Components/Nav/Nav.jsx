import "./Nav.css";
import { NavLink, useNavigate } from 'react-router-dom'
import { Home, Search, Post, Profile, Logout } from '../../Svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeToken } from "../../utils";
export function Nav() {
    const { globalState: { route } } = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    function logOut() {
        removeToken()
        navigate('/login')
    }
    function navigateToCreatePost(){
        navigate("/create-post")
    }
    return (
        <nav className="nav">
            <div>
                <NavLink to="/">
                    <span className={route === "Home" ? "active" : "in-active"}><Home /></span><span className={route === "Home" ? "white tag" : "disabled tag"}>Home</span>
                </NavLink>
                <NavLink to="/search">
                    <span className={route === "Search" ? "active" : "in-active"}><Search /></span><span className="tag">Search</span>
                </NavLink>
                <span className="post-btn" onClick={navigateToCreatePost}>
                    <NavLink className="post" to="/create-post">
                        <span className={route === "Post" ? "active" : "in-active"}><Post /></span>
                    </NavLink>
                    <span className={route === "Post" ? "white tag" : " tag"}>Post</span>
                </span>
                <NavLink to="/profile">
                    <span className={route === "Profile" ? "active" : "in-active"}> <Profile /></span><span className="tag">Profile</span>
                </NavLink>
                <a onClick={logOut}>
                    <span className={route === "Logout" ? "active" : "in-active"}><Logout /></span><span className="tag">Logout</span>
                </a>
            </div>
        </nav>
    );
}