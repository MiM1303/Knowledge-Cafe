import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className='bg-yellow-50 p-4 rounded-xl mb-4'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

export default Bookmark;

Bookmark.propTypes ={
    bookmark: PropTypes.object
}