import axios from 'axios'
import { deleteLike } from '../../graphql'
export async function removeLike(userId, postId, token) {
    var data = JSON.stringify({
        query: deleteLike(userId, postId),
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