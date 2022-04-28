import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com/users",
    headers: {
        "accept": "application/vnd.github.v3+json"
    }
})

export const usersAPI = {
    getUser(username: string) {
        return instance.get(`/${username}`)
    },
    getUserRepositories(username: string) {
        return instance.get(`/${username}/repos`)
    }
}