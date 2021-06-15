import axios from 'axios'
import { updateProfile } from '../../graphql'


export async function updateUserImage(token, userId,profileImg) {
    var updateProfileImageQuery = JSON.stringify({
        query: updateProfile(userId,profileImg),
        variables: {}
    });

    var config = {
        method: 'post',
        url: 'https://amusing-meerkat-56.hasura.app/v1/graphql',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        data: updateProfileImageQuery
    };

    const data = await axios(config)

    return data.data
}