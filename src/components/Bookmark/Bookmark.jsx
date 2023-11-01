import PropTypes from 'prop-types';
const Bookmark = ({book,index}) => {
    console.log(book)
    const {courseName}=book;
    return (
        <div>
<div>
<h3>course name</h3>
<h3>{index+1} {courseName}</h3>
</div>
    <h3 className="pb-4 border border-white border-b-slate-200">total credit hour</h3>
    <h3>total price:{} USD</h3>
        </div>
    );
};
Bookmark.propTypes={
    book:PropTypes.object.isRequired,
    index:PropTypes.number
}
export default Bookmark;