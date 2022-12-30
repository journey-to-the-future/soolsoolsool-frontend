import axios from 'axios'

// export const api = axios.create({
//     baseURL: 'http://43.201.93.151:8080/api/v1'
// })

export const getMainSlider = async (pageParam = 0, options = {}) => {
    const response = await axios.get(`/api/v1/item/list`, options)
    return response.data.data
}

export const getExplore = async (pageParam = 0, options = {}) => {
    const response = await axios.get(`/api/v1/item/list`)
    return response.data.data
}

export const getMain = async (pageParam = 0, options = {}) => {
    const response = await axios.get(`/api/v1/item/list/page?page=${pageParam}&size=10`, options)
    return response.data.data.content
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

