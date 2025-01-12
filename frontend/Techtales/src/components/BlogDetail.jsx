import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { retrieveBlog } from "../api/ApiService"

export default function BlogDetail() {
    const {id} = useParams()

    const [blog, setBlog] = useState([])

    function loadBook() {
        retrieveBlog(id)
        .then(response => {
            setBlog(response.data)
        })
        .catch(error => console.log(error))
    }
    useEffect(
        () => loadBook()
    )
    return (
        <>
            <div className="detail">
                <div className="topic"><b>{blog.topic}</b></div>
                {blog.content}
                <div className="user">Blog By {blog.user}</div>
            </div>
            
        </>
    )
}