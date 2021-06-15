export function addPost(image, caption, userId) {
  console.log(userId)
    return `mutation AddPost {
      insert_Posts_one(object: {user_id: "${userId}", img_url: "${image}", content: "${caption}", comment_count: 0, like_count: 0}) {
        id
        user_id
        like_count
        img_url
        content
        comment_count
      }
    }
      `
}