export function deleteLike(userId, postId) {
    return `mutation removeLike {
        delete_like(where: {liked_by: {_eq: "${userId}"}, _and: {post_id: {_eq: "${postId}"}}}) {
          affected_rows
        }
      }`
}