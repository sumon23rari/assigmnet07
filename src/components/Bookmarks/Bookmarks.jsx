import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="rounded-xl bg-white p-[14px_10px] ml-[15px] w-1/4">
            <h3 className="text-[#2F80ED] pb-3 text-[18px] font-bold leading-7 border border-solid border-white border-b-[#2F80ED]">
            Credit Hour Remaining  hr
            </h3>

            {
                bookmarks.map((book,index)=><Bookmark key={index} index={index} book={book}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired
}
export default Bookmarks;