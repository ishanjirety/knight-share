export const setToken = (token, user_id, isLoggedin) => {
    return localStorage.setItem("loggedInUser", JSON.stringify({ isloggedIn: isLoggedin, token: token, user_id: user_id }))
}
export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("loggedInUser"))
    return token
}
export const removeToken = () => {
    return localStorage.removeItem("loggedInUser")
}