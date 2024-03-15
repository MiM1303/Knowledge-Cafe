import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, reading_time, hashtags, author, author_img, posted_date}=blog;
    // console.log(blog);
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 '>
                <div className='flex gap-6'>
                    <img src={author_img} className='w-14 rounded-2xl' alt="" />
                    <div className="ml-6" >
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className=' flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-5'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx)=> <span className=' mr-2' key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={()=>handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
}

export default Blog;