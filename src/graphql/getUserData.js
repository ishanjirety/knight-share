export function getUserData(userId) {
    return (`query getUserData($id: uuid!) {
        Users(where: {id: {_eq: ${userId}}}, order_by: {created_at: desc}) {
          bio
          created_at
          profile_image
          username
          Post {
            content
            img_url
            like_count
            comment_count
          }
        }
      }      
      `)
}