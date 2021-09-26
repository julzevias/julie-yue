import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: 120px 0 230px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.a`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 320px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  border: solid;
  text-decoration: none;
  color: black;
  margin: 0 15px 30px 15px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsCard2 = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 320px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;
  border: solid;
  text-decoration: none;
  color: black;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  margin-bottom: 20px;
  display: block;
  max-width: 230px;
  max-height: 230px;
  width: auto;
  height: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  min-height: 56px;
`;

export const Projectdiv = styled.div`
  display: block;
  text-align: center;
`;
