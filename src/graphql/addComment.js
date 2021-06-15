export function addComment(comment, userId, post_id) {
    return `mutation addComment {
        insert_Comments_one(object: {comment: ${comment}, commenter_id: ${userId}, post_id: ${post_id}}) {
          comment
          post_id
        }
      }
      `
}