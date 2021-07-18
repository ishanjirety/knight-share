import axios from 'axios'
import { loginUser } from '../../graphql'

export async function authenticateUser(username, password) {

    var data = JSON.stringify({
        query: loginUser(username, password),
        variables: {}
    });
    console.log("in function")
    var config = {
        method: 'post',
        url: 'https://amusing-meerkat-56.hasura.app/v1/graphql',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    try {
        const dataRec = await axios(config)
        return dataRec.data

    } catch (e) {
        return
    }
}