import { useEffect, useState } from "react"
import { retrieveBlogs } from "../api/ApiService"
import { useNavigate } from "react-router-dom"

export default function Blogs() {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate()

    function loadBlog() {
        retrieveBlogs()
        .then ((response) => {
            setBlogs(response.data)
        })
        .catch((error) => console.log(error))
    }

    function blogDetails(id) {
        navigate(`/blogs/${id}`)
    }

    useEffect(
        () => {
            loadBlog()
        },[]
    )
    return (
        <>
            <div className="blogs">
                {blogs.map(
                    blog => (
                        
                        <div className="blog" key={blog.id}>
                            <button onClick={() => {
                                blogDetails(blog.id)
                            }}>
                            <div><b>{blog.topic}</b></div>
                            {blog.content.substring(0, 100)}...
                            <div><i>~{blog.user}</i></div>
                            </button>
                        </div>
                        
                    )
                )} 
            </div>
        </>
    )
}