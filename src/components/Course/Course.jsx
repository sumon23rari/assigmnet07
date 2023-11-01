import PropTypes from 'prop-types'; 
import { BiDollar,BiBookOpen} from "react-icons/bi";
const Course = ({course,handleSelected}) => {
    const {courseId,img,courseName,courseDescription,price,credit}=course;
 
    return (
       
            <div>
            <div className='rounded-xl bg-white p-3'>
            <img src={img}/>
            <h3 className='font-semibold text-[#1C1B1B] text-[18px] py-4'>{courseName}</h3>
            <p className='leading-5 text-[14px] text-[#94a3b8]'>
            {courseDescription}
            </p>
            <div className='flex justify-between py-4'>
            <div className='flex justify-between'>
            <BiDollar></BiDollar> &nbsp; &nbsp; <span>Price: {price}</span>
            </div>
            <div  className='flex justify-between'>
            <BiBookOpen></BiBookOpen> &nbsp; &nbsp; credit: {credit}hr
            </div>
            </div>
            <button onClick={()=>handleSelected(course)} className='w-full py-2 text-white text-center bg-[#2F80ED] rounded-lg border-0'>selected</button>
            </div>
           
        </div>
    );
};
Course.propTypes={
    course:PropTypes.object.isRequired
}
export default Course;