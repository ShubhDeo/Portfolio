import React from 'react'
import Profile from './Profile'
import Tech from './Tech'
import Projects from './Projects'
import Contact from './Contact'

import '../App.css'

const Content = () => {
    return (
        <div className="content">
            <Profile />
            <Tech />
            <Projects />
            <Contact />
        </div>
    )
}

export default Content
