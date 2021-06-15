import axios from "axios";
import { addPost } from '../../graphql'
export async function uploadPost(image, caption, userId, token) {
    console.log(image, caption, userId, token)
    var addPostQuery = JSON.stringify({
        query: addPost(image, caption, userId),
        variables: {}
    });

    var config = {
        method: 'post',
        url: 'https://amusing-meerkat-56.hasura.app/v1/graphql',
        headers: {
            'Content-Type': 'application/json',
            'authorization' : `Bearer ${token}`
        },
        data: addPostQuery
    };

    const data = await axios(config)
    console.log(data)
}


