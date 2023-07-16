import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
    return (
        <Link to={`/projects/${project.id}`} className="project-card">
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </Link>
    );
}

export default ProjectCard;
