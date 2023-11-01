
import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {
const [bookmarks,setBookmarks]=useState([]);
const handleSelected=(book)=>{
  const newBookmark=[...bookmarks,book];
  setBookmarks(newBookmark)
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
</>
  )
}

export default App
