import axios from 'axios'
import { getPost } from '../../graphql'
export async function getUserPosts(token, userId) {
    var data = JSON.stringify({
        query: getPost(userId),
        variables: {}
    });

    var config = {
        method: 'post',
        url: 'https://amusing-meerkat-56.hasura.app/v1/graphql',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        data: data
    };

    const dataRec = await axios(config)

    return dataRec.data
}