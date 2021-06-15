export function getUserData(userId) {
  console.log(userId)
    return (`query getUserData{
        Users(where: {id: {_eq: "${userId}"}}, order_by: {created_at: desc}) {
          bio
          created_at
          profile_image
          username
          Posts {
            content
            img_url
            like_count
            comment_count
          }
        }
      }      
      `)
}