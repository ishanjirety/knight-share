export function loginUser(username, password) {
    return `query MyQuery {
        Login(password: ${password}, username: ${username}) {
          username
          token
          profile_image
          id
          bio
        }
      }`
}