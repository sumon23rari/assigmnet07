import PropTypes from 'prop-types';
const Bookmark = ({book,index}) => {
    console.log(book)
    const {courseName}=book;
    return (
        <div>
<div>
<h3>{index+1} {courseName}</h3>
</div>

        </div>
    );
};
Bookmark.propTypes={
    book:PropTypes.object.isRequired,
    index:PropTypes.number
}
export default Bookmark;