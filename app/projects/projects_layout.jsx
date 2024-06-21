const ProjectsLayout = ({ name, description, owner, startDate, finishDate, technologies }) => {
    return (
        <div className="flex items-center justify-between m-auto mb-2 relative rounded-lg overflow-hidden p-6 text-foreground rounded-full flex items-center justify-center foreground/20 border border-accent border-solid backdrop-blur-[10px] shadow-glass-inset">
            <div className="flex items-center justify-center space-x-2">
                <h2 className="text-foreground">{name}</h2>
                <p className="text-muted">{description}</p>
            </div>
            <div className="text-foreground pl-2">
                <p>
                    {startDate}
                </p>
                <p>
                    {
                        finishDate === "OnGoing" ? "On Going" :
                            finishDate === "Finish Date" ? "Finish Date" :
                                new Date(finishDate).toLocaleDateString()
                    }
                </p>
            </div>
        </div>
    );
}

export default ProjectsLayout