import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'https://techtales-backend-c7ch.onrender.com'
})

export const retrieveBlogs = () => {
    return apiClient.get('/blogs')
}

export const retrieveBlog = (id) => {
    return apiClient.get(`/blogs/${id}`)
}