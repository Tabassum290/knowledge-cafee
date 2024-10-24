import Bookmark from "./Bookmark";
import PropTypes from 'prop-types';
const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className='md:w-1/3 rounded-lg bg-gray-400 mx-4 my-4'>
            <div>
                <h1 className='text-3xl'>
            Reading Time:{readingTime}min </h1></div>
            <h2 className="text-3xl text-center ">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key= {idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array.isRequired,
    readingTime : PropTypes.number
  }
export default Bookmarks;