
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Blogs from "./Blogs";
import BlogDetail from "./BlogDetail";
import Welcome from "./Welcome";

export default function Container() {
    

    
    return(
        <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Welcome/>}></Route>
                <Route path="/blogs" element={<Blogs/>}></Route>
                <Route path="/blogs/:id" element={<BlogDetail/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
        </>
    )
}