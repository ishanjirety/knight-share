import axios from 'axios'
import { addLike } from '../../graphql'
export async function updateLike(token, userId, postId) {
    var data = JSON.stringify({
        query: addLike(postId, userId),
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