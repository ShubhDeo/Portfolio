import React from 'react'
import projects from './projectList'

const Projects = () => {

    return (
        <div className="projects">
            <h2>My Projects</h2>
            {projects.map((project, i) => (
                i % 2 === 0 ? (
                    <div className="projects_list" key={i} style={{ marginBottom: '10vh' }}>
                        <div className="detail">
                            <h3 style={{ color: '#fff600' }}>{project.title}</h3>
                            <h5 style={{ padding: '10px' }}>{project.description}</h5>
                            <br />
                            <div>
                                {project.icon.map((ic, index) => (
                                    <i className={ic} key={index} style={{ fontSize: '3rem', margin: '0 3px' }}></i>
                                ))}
                            </div>
                            <div className="btn-grp" style={{ margin: '15px 0' }}>
                                {project.web && <a href={project.web} rel="noopener noreferrer" target="_blank"><button>See Live</button></a>}
                                {project.code && <a href={project.code} rel="noopener noreferrer" target="_blank"><button>View Code</button></a>}
                            </div>

                        </div>
                        <div className="image">
                            <img
                                src={project.img}
                                alt={project.alt}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="projects_list" key={i} style={{ marginBottom: '10vh' }}>
                        <div className="image">
                            <img
                                src={project.img}
                                alt={project.alt}
                            />
                        </div>
                        <div className="detail">
                            <h3 style={{ color: '#fff600' }}>{project.title}</h3>
                            <h5 style={{ padding: '10px' }}>{project.description}</h5>
                            <br />
                            <div>
                                {project.icon.map((ic, index) => (
                                    <i className={ic} key={index} style={{ fontSize: '3rem', margin: '0 3px' }}></i>
                                ))}
                            </div>
                            <div className="btn-grp" style={{ margin: '15px 0' }}>
                                {project.web && <a href={project.web} rel="noopener noreferrer" target="_blank"><button>See Live</button></a>}
                                {project.code && <a href={project.code} rel="noopener noreferrer" target="_blank"><button>View Code</button></a>}
                            </div>

                        </div>
                    </div>
                )

            ))}

            <a href="https://github.com/ShubhDeo" target="_blank" rel="noopener noreferrer"><button className="btn">View More Projects</button></a>

        </div>
    )
}

export default Projects
