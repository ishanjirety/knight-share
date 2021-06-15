export function addLike(postId, userId) {
    console.log(postId, userId)
    return `mutation MyMutation {
        insert_like_one(object: {post_id: "${postId}", liked_by: "${userId}"}) {
          liked_by
          post_id
          id
        }
      }
      `
}