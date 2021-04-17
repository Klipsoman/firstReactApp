import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': "9b9bac03-ee8d-4e5c-aaa3-3095c72b8c7b"
    }
})

export const UsersAPI = {

    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((res) => {
                return res.data
            })
    },

    toFollowUser: (userId) => {
        return instance.post(`follow/${userId}`)
    },

    toUnfollowUser: (userId) => {
        return instance.delete(`follow/${userId}`)
    },

    getMyProfile: (userId) => {
        return instance.get(`profile/` + userId)
    },

    checkAuth: () => {
        return instance.get('auth/me')
    }

}

export const ProfileAPI = {

    getMyProfile: (userId) => {
        return instance.get(`profile/` + userId)
    },

    checkAuth: () => {
        return instance.get('auth/me')
    },

    getStatus: (userId) => {
        return instance.get('/profile/status/' + userId)
    },

    updateStatus: (status) => {
        return instance.put('/profile/status/', {status})
    }

}