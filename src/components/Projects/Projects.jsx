import React from "react";
import data from "../../data.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";

export default function projects() {
	const projectElement = data.portfolio.map((project, index) => {
		return (
			<div key={index}>
				<ProjectCard
					className="project-card"
					project={project}
				/>
			</div>
		);
	});
	return <div className="projects">{projectElement}</div>;
}
