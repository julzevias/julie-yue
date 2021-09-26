import React from "react";
import Icon1 from "../../images/task.png";
import Icon2 from "../../images/weather.png";
import Icon3 from "../../images/wp_ecommerce.png";
import Icon4 from "../../images/color.png";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  Projectdiv,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard
          href="https://julzevias.github.io/weather2/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Weather Application</ProjectsH2>
            <ProjectsP>
              Search a location for the weather. Reactive icons included.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>

        <ProjectsCard
          href="https://julzevias.github.io/react-task-tracker/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Task Management</ProjectsH2>
            <ProjectsP>
              Keep track of your to-do's in this productivity application.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>

        <ProjectsCard href="https://lolaegis.com/" target="_blank">
          <Projectdiv>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>WP E-commerce Site</ProjectsH2>
            <ProjectsP>
              Fully functioning store (except credit card functionality) using
              WooCommerce and OceanWP.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>
        <ProjectsCard
          href="https://julzevias.github.io/weather2/"
          target="_blank"
        >
          <Projectdiv>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>Color Generator</ProjectsH2>
            <ProjectsP>
              Generates tints and shades of a color of your choice. Can copy to
              clipboard.
            </ProjectsP>
          </Projectdiv>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
