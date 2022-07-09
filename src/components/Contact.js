import React, { useState } from 'react'
import firebase from '../firebase'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [reply, setReply] = useState('')

    const handleSubmit = () => {
        const messageRef = firebase.database().ref('message');
        setLoading(true)
        if (name && email && message) {
            messageRef.push({
                name,
                email,
                message
            })
                .then(() => {
                    console.log('success')
                    setReply('Thanks for contacting 😊')
                    setLoading(false)
                    setName('')
                    setEmail('')
                    setMessage('')
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false)
                    setReply('Try Again 👎')
                })
        } else {
            setLoading(false)
            setReply('Input all the fields.')
        }

    }

    return (
        <div className="contact">
            <h2>Any question ..?</h2>

            <div className="contact-form">
                <input type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)} value={name}></input>
                <input type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email}></input>
                <textarea
                    type="text"
                    placeholder="Enter message"
                    rows="5"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                ></textarea>
                {loading ? (
                    <h4>Loading...</h4>
                ) : (<button className="btn" onClick={handleSubmit} >Submit</button>)}
                {reply && <h2>{reply}</h2>}
            </div>

            <footer>
                <a href="https://www.linkedin.com/in/shubh-deo-2a157a194/" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 128 128">
                        <g id="original"><path fill="#0076b2" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></path><path fill="#fff" d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></path><path fill="#fff" d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></path></g>
                    </svg>
                </a>
                <a href="https://github.com/ShubhDeo" target="_blank" rel="noopener noreferrer">
                    <svg stroke="currentColor" fill="#fefefe" strokeWidth="0" role="img" viewBox="0 0 24 24" className="devicon-large" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
                </a>

            </footer>
        </div>
    )
}

export default Contact
