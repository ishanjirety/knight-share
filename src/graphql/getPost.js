export function getPost(user_id) {
  return `query getPosts {
        Posts(where: {user_id: {_eq: "${user_id}"}}) {
          likes {
            liked_by
            post_id
          }
          comment_count
          content
          id
          img_url
          like_count
          user_id
          User {
            username
            profile_image
            id
            bio
          }
        }
      }
      `
}