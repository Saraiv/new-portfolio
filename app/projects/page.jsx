import ProjectsList from "@/app/projects/project_list"
import { projectsData } from "@/app/helpers/data"
import RenderModel from "@/app/components/index/render_model"
import { Avatar } from "@/public/models/My_model"

const Projects = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between relative">
            <ProjectsList projects={projectsData} />

            <RenderModel>
                <Avatar />
            </RenderModel>
        </main>
    );
}

export default Projects
