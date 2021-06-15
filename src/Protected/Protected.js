import React from 'react'
import { getToken } from '../utils'
import { Route, Navigate } from 'react-router-dom'

export function Protected({ path, ...props }) {
    const loginStatus = getToken()
    return (
        loginStatus?.isloggedIn ? <Route {...props} path={path} /> : <Navigate state={{ from: path }} replace to="/login" />
    )
}


