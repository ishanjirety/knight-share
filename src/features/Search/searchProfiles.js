import axios from 'axios'
import { getSearchResults } from '../../graphql'

export async function searchProfiles(query, token) {
    var queryObject = JSON.stringify({
        query: `query userSearch {
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
          }`,
        variables: {}
    });

    var config = {
        method: 'post',
        url: 'https://amusing-meerkat-56.hasura.app/v1/graphql',
        headers: {
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`
        },
        data: queryObject
    };

    const data = await axios(config)
    return data.data.data
}