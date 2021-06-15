export function getSearchResults(query) {
  console.log(query)
    return `query userSearch {
        Users(where: {username: {_ilike: "%${query}%"}}) {
          profile_image
          id
          username
          bio
          Posts {
            content
            img_url
            like_count
            comment_count
          }
        }
      }
      `
}