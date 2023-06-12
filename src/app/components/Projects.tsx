import { projects } from "@/store/data";
import { ItemProject } from "./ItemProject";

export const Projects = () => {
  return (
    <section className="s1 ">
      <div className="main-container wrapper p-[2rem] md:p-[4rem] border-2 shadow-current border-[var(--colorBorder)]">
        <h3 className="text-center py-2">Algunos de mis proyectos!</h3>
        <div className="post-wrapper">
          {projects.map((project) => (
            <ItemProject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
