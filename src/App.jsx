
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const [bookmarks,setBookmarks]=useState([]);
// const [creditHours,setCreditHours]=useState(0);
// const [remaings,setRemainngs]=useState(0)
// const updateSelectItem=(book)=>{
//   console.log(book)
//   let creditHour=0;
//   if (creditHours<=20) {
//     creditHour=creditH
//   }
  
// }
const handleSelected=(book)=>{
  
  const bookItem=bookmarks.find(bok=>bok.courseId===book.courseId)
 if (!bookItem) {
  const newBookmark=[...bookmarks,book];
  // updateSelectItem(book)
  setBookmarks(newBookmark)
 } else {
  toast.error('already selected')
 }

}
  return (
<>
<Header></Header>
<div className=' md:mx-10 sm:mx-5 flex'>
<div className='md:w-3/4'>
<Courses handleSelected={handleSelected}></Courses>
</div>
<Bookmarks bookmarks={bookmarks}></Bookmarks>
</div>
<ToastContainer />
</>
  )
}

export default App
