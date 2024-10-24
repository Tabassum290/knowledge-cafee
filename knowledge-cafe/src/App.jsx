import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Bookmarks from './Components/Bookmarks'
import { useState } from 'react'
function App() {
const [bookmarks,setBookmarks] = useState([]);
const [readingTime,setReadingTime] = useState(0)

const handleAddtoBookmark = blog => {
const newBookmark = [...bookmarks,blog];
setBookmarks(newBookmark);
}

const handleMarkAsRead = (time,id) => {
  console.log("marking",time)
const newReadingTime = readingTime + Number(time);
setReadingTime(newReadingTime);
// remove the read blog from bookmark
const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
setBookmarks(remainingBookmarks);
} 
  return (
    <>
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs
       handleAddtoBookmark={handleAddtoBookmark}
       handleMarkAsRead={handleMarkAsRead}> </Blogs>
      <Bookmarks key={bookmarks.id} bookmarks={bookmarks}
      readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
