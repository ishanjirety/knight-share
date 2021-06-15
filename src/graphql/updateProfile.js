export function updateProfile(userId, profile_image) {
    return `mutation updateProfile {
        update_Users(where: {id: {_eq: "${userId}"}}, _set: {profile_image: "${profile_image}"}) {
          affected_rows
        }
      }`
}