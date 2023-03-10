import React from 'react';
import Project from './Project';
import projectsData from './projectsData.json';

function ProjectGallery() {
    return (
        <div className="container my-5">
            <h2 className="text-center my-5">Projects</h2>
            <div className="row">
                {projectsData.map(project => (
                    <div key={project.id} className="col-md-4 mb-4">
                        <Project id={project.id} title={project.title} deployedUrl={project.deployedUrl} githubUrl={project.githubUrl} image={project.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectGallery;
