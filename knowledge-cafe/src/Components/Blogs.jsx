import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "./Blog";
const Blogs = ({handleAddtoBookmark,handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect (()=>{
fetch("blogs.json")
.then(res => res.json())
.then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3 my-4'>
            {
                blogs.map(blog => <Blog key={blog.id}
                    handleAddtoBookmark={handleAddtoBookmark}
                    handleMarkAsRead ={handleMarkAsRead}
                    blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddtoBookmark : PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blogs;