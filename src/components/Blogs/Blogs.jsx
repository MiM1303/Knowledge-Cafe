import { useState, useEffect } from "react";


const Blogs = () => {
    // fetching blog data and setting them in blogs array
    const [blogs, setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Blogs;