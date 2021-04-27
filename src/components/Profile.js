import React from 'react'
import '../App.css'

const Profile = () => {
    return (
        <>
            <div className="profile">
                <div className="text">
                    <div>
                        <h1>Hola <span className="wave">👋</span></h1>
                        <h2>My name is Shubh</h2>
                        <h3>I'm a student at IIIT Gwalior</h3>
                        <h3>and a <span className="intro">Full Stack Web Developer.</span></h3>
                    </div>
                </div>
                <div className="image">
                    <img src="/profile.jpg"
                        style={{ height: '200px', width: '200px', borderRadius: '50%' }}
                        alt="profile-img"
                    />
                </div>
            </div>

        </>
    )
}

export default Profile
