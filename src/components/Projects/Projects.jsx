import React from "react";
import defaultData from "../../data.json";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import { useLoaderData } from "react-router-dom";

export async function loader() {
	try {
		const res = await fetch(
			"https://api.jsonbin.io/v3/b/66976174acd3cb34a86743d3/latest"
		);

		if (!res.ok) {
			const { errorMessage } = await res.json();
			throw new Error(errorMessage);
		}

		const data = await res.json();
		return { isSuccess: true, data: data.record };
	} catch (e) {
		console.log("failed to load projects data", e);
		console.log("fallback to default data");
		return { isSuccess: false, data: defaultData };
	}
}
export default function Projects() {
	const { isSuccess, data } = useLoaderData();
	const projectsData = isSuccess ? data : defaultData;
	const projectElement = projectsData.portfolio.map((project, index) => {
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
