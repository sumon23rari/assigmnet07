
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
const [bookmarks,setBookmarks]=useState([]);
let remaingHour=20;
let credithour=0;
let newRemaning=remaingHour;
let newCredithour=credithour;
for (const bookm  of bookmarks) {
 if (remaingHour>0 && credithour<=20) {
  remaingHour=remaingHour-bookm.credit;
  credithour=credithour+bookm.credit;
  if (remaingHour>0 && credithour<=20) {
    newRemaning=remaingHour;
    newCredithour=credithour;
  }
 } else {
  toast.error('please credithour less then 21')
 }
}
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
<Bookmarks bookmarks={bookmarks} remaingHour={newRemaning} credithour={newCredithour}></Bookmarks>
</div>
<ToastContainer />
</>
  )
}

export default App
