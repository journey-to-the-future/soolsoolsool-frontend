import axios from 'axios'

// export const api = axios.create({
//     baseURL: 'http://43.201.93.151:8080/api/v1'
// })

export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await axios.get(`/posts?_page=${pageParam}`, options)
    return response.data
}

export const getExplore = async (pageParam = 1, options = {}) => {
    const response = await axios.get(`/api/v1/item/list`)
    return response.data.data
}

export const getMain = async (pageParam = 1, options = {}) => {
    const response = await axios.get(`/?page=${pageParam}`, options)
    return response.data.data
}

export const getProductDetail = async (productParam) => {
    const response = await axios.get(`/api/v1/item/${productParam}`)
    return response.data.data
}

export const mainPage = async (pageParam = 1, options = {}) => {
    try {
        const response = await axios.get(`/api/v1/item/list`);
        console.log(response.data.data);
        return response.data.data;
    } catch (err) {
        console.log(err);
    }
}

