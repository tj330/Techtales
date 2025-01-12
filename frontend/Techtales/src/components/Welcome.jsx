import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome to Techtales</h1>
            <p>This is a technical blogging platform</p>
            Click to view the blogs: <Link to="/blogs"  className="link">Blogs</Link>
        </div>
    )
}