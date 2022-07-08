import React from 'react'
import '../App.css'
import { FaCloudDownloadAlt  } from 'react-icons/fa';



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
                    <a href="https://drive.google.com/file/d/1zltrXsdk8i9lW5RwGins1mX16rU8CCuc/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
                       <h3 className='resume'>Resume <span className='download'><FaCloudDownloadAlt style={{height: "24px", width: "30px"}}/></span></h3>
                    </a>
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
