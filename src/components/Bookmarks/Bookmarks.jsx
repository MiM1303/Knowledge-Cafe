import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-slate-100 p-6 rounded-2xl">
            <div>
                <h3 className='text-[#6047EC] border-2 p-5 bg-[#6047EC1A] border-[#6047EC] rounded-2xl text-2xl font-bold text-center mb-5'>Spent time on read:{readingTime}</h3>
            </div>
            <h2 className='text-2xl mb-4 text-center'>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;