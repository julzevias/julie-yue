import React from 'react';
import Icon1 from '../../images/task.png';
import Icon2 from '../../images/weather.png';
import Icon3 from '../../images/question.png';
import { ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP } from './ProjectsElements'
 
const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Projects</ProjectsH1>
            <ProjectsWrapper>
                <ProjectsCard>
                    <ProjectsIcon src={Icon2}/>
                    <ProjectsH2>Weather Application</ProjectsH2>
                    <ProjectsP>Search a location for the weather and receive a cute background to boot!</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon1}/>
                    <ProjectsH2>Task Management</ProjectsH2>
                    <ProjectsP>Keep track of your to-do's on this trusty productivity application!</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsIcon src={Icon3}/>
                    <ProjectsH2>Coming Soon</ProjectsH2>
                     <ProjectsP>Keep Your Eyes Peeled!</ProjectsP> 
                </ProjectsCard>
            </ProjectsWrapper>
            
        </ProjectsContainer>
    );
};
 
export default Projects;