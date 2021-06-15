import React, { useEffect } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Arrow1 from '../../Svg/Arrow-1.svg'
import Arrow2 from '../../Svg/Arrow-2.svg'
import { useSelector, useDispatch } from 'react-redux'
import { updatePassword, updateUsername, loginUser } from './loginSlice'
import { setToken } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { setRoute } from '../globalSlice'
export function Login() {
    const { status, username, password, data } = useSelector(state => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        if (status === "fulfilled") {
            if (data.token && data.id) {
                console.log(data.token,data.id)
                setToken(data?.token, data.id,true)
                navigate('/')
            }
        }
    }, [status])
    function loginHandler() {
        console.log(username, password)
        if (username !== "" && password !== "") {
            dispatch(loginUser({ username, password }))
        }
    }
    useEffect(() => { dispatch(setRoute("Login")) }, [])


    return (
        <div className="login">
            <img src={Arrow1} alt="" className="arrow arrow-random-1"></img>
            <img src={Arrow2} alt="" className="arrow arrow-random-2"></img>
            <h1 className="splash-screen-heading">KnightShare</h1>
            <div className="login-heading">
                <h2>Welcome back</h2>
                <p>SignIn to continue to KnightStream</p>
            </div>
            <div className="login-wrapper">
                <div className="input-fields">
                    <input className="input" required type="text" onChange={(e) => dispatch(updateUsername(e.target.value))} /><label>Username</label>
                </div>
                <div className="input-fields">
                    <input className="input" required type="password" onChange={(e) => dispatch(updatePassword(e.target.value))} /> <label>Password</label>
                </div>
            </div>
            <button className="primary-btn" onClick={loginHandler}>Login</button>
            <Link to="/signup" className="navigation-link">Already registered? Signup</Link>
        </div>
    )
}


