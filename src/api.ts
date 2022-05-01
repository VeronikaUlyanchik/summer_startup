import axios, {AxiosResponse} from "axios";
import {RepositoryType, UserInfo} from "./redux/user-reducer";

const instance = axios.create({
    baseURL: "https://api.github.com/users",
    headers: {
        "accept": "application/vnd.github.v3+json"
    }
})

export const usersAPI = {
    getUser(username: string) {
        return instance.get<any, AxiosResponse<UserInfo>>(`/${username}`)
    },
    getUserRepositories(username: string) {
        return instance.get<any, AxiosResponse<RepositoryType[]>>(`/${username}/repos`)
    }
}