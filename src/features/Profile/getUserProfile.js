import axios from 'axios'
import { getUserData } from '../../graphql'

export async function getUserProfile(token, userId) {
    var data = JSON.stringify({
        query: getUserData(userId),
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