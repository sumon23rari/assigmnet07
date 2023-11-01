
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {


  return (
<>
<Header></Header>
<div className=' md:mx-10 sm:mx-5'>
<div className='md:w-3/4'>
<Courses></Courses>
</div>
<Bookmarks></Bookmarks>
</div>
</>
  )
}

export default App
