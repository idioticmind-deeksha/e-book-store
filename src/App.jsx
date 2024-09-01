import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Course from './components/Course';
import Home from './components/Home';
import SignUp from './components/SignUp';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
        <Route path="/signup" element={<SignUp />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
