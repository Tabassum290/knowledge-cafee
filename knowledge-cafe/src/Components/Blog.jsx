import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddtoBookmark,handleMarkAsRead }) => {
   const {title,cover,author_img,author,reading_time,posted_date,hashtags,idx,id} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full h-[600px] object-cover mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <section className='flex justify-between'>
                <div className='flex mt-8'>
     <img className='w-14 rounded-lg' src={author_img} alt="" />
     <div className='ml-6'>
        <h3>{author}</h3>
        <p>{posted_date}</p>
     </div>
                </div>
                <div>
<span>{reading_time} min read</span>
<button onClick={()=> handleAddtoBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </section>
          <h1 className='text-3xl font-bold mb-4'>{title}</h1>
          <p>
            {
                hashtags.map(hash => <span key={idx}>
                    <a href="">#{hash}</a>
                </span>)
            }
          </p>
          <button onClick={() => handleMarkAsRead(Number(reading_time),id)} className="text-red-600 font-bold underline">
  Mark as read
</button>

        </div>
    );
};
Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddtoBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;