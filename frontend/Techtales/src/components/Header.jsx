import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <div className='logo'><b><i>Techtales</i></b></div>
      <div className='links'>
        <div><Link to="/" style={{textDecoration: "none", color: "white" }} className="link">Home</Link></div>
        <div><Link to="/blogs" style={{textDecoration: "none", color: "white"}} className="link">Blogs</Link></div>
      </div>
    </nav>
  );
}