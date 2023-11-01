import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";
import { toast } from 'react-toastify';

const Bookmarks = ({bookmarks}) => {
    let remaingHour=20;
    for (const bookm  of bookmarks) {
       if (remaingHour>=0 ) {
        remaingHour=remaingHour-bookm.credit;
        if (remaingHour<0) {
            toast.error('remaining hour less 0')
        }
       }
    }
    return (
        <div className="rounded-xl bg-white p-[14px_10px] ml-[15px] w-1/4">
            <h3 className="text-[#2F80ED] pb-3 text-[18px] font-bold leading-7 border border-solid border-white border-b-[#2F80ED]">
            Credit Hour Remaining {remaingHour}  hr
            </h3>
        <div  className="py-4 border border-white border-b-slate-200">
       <h3 className='font-bold text-[20px] text-[#1C1B1B] py-2'>Course Name</h3>
            {
                bookmarks.map((book,index)=><Bookmark key={index} index={index} book={book}></Bookmark>)
            }
            </div>
            <h3 className="py-4 border border-white border-b-slate-200">total credit hour</h3>
            <h3>total price:{} USD</h3>
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired
}
export default Bookmarks;