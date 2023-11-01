import { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleSelected}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div  className='grid grid-cols-3 gap-3'>
            {
                courses.map((course,index)=><Course handleSelected={handleSelected}  course={course} key={index}></Course>)
            }
        </div>
    );
};

export default Courses;