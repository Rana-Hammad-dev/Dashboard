import React from 'react'
import './App.css'
import Sidebar from './component/Sidebar/Sidebar'
import Mainsection from './component/Mainsection/Mainsection'
import RightSidebar from './component/Rightside/RightSidebar'

const App = () => {
  return (
    <div className='app'>
      <div className="dashboard">
        <Sidebar />
        <Mainsection />
        <RightSidebar />
      </div>
    </div>
  )
}

export default App
