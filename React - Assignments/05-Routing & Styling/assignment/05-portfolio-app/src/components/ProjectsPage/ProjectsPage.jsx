import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectsPage.css';

function ProjectsPage({ projects }) {

    console.log("**@ projects page , all projects are , ", projects)

    return (
        <div className="projects">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            <Outlet />
        </div>
    );
}

export default ProjectsPage;
