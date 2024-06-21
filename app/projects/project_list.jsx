import ProjectsLayout from "@/app/projects/projects_layout"

const ProjectsList = ({ projects }) => {
    return (
        <div className="w-full max-w-4xl px-16 space-y-8 flex flex-col items-center">
            {projects.map((project, index) => {
                return <ProjectsLayout key={index} {...project} />
            })}
        </div>
    );
}

export default ProjectsList
