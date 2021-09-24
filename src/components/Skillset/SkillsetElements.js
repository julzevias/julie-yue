import styled from "styled-components";

export const SkillsetBg = styled.div`
  background: linear-gradient(pink, #010606);
`;

export const SkillsetContainer = styled.div`
  background: rgba(255, 235, 95, 0.4);
  width: 90%;
  border-radius: 10%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
`;

export const SkillsetH1 = styled.h1`
  position: relative;
  font-size: 3rem;
  color: #fff;
  text-align: center;
  padding-bottom: 40px;
  bottom: 40px;
`;

export const SkillsetDescp = styled.div`
  padding: 90px;

  @media screen and (max-width: 1200px) {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

export const SkillsetP = styled.div`
  font-size: 1rem;
  text-align: left;
  font-size: 25px;
  line-height: 32px;

  @media screen and (max-width: 1200px) {
    font-size: 21px;
  }

  @media screen and (max-width: 720px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 19px;
  }
`;

export const SkillsetAttributes = styled.div`
  width: 50%;
  padding: 1em;
  padding-bottom: 50px;
  margin-top: 10px;

  @media screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media screen and (max-width: 720px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 550px) {
    padding-top: 130px;
  }

  @media screen and (max-width: 480px) {
    padding-left: 0;
  }
`;

export const SkillsetStrength = styled.div`
  width: 150px;
  height: 70px;
  padding-top: 22px;

  margin: 30px 0 0 60px;
  border-radius: 30%;
  font-size: 18px;

  text-align: center;
  background-color: #ff9c9c;

  box-shadow: 5px 6px #888888;

  color: #972121;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 17px;
  }

  @media screen and (max-width: 720px) {
    padding-top: 20px;
    width: 100px;
    height: 60px;
    font-size: 15px;
  }
`;

export const SkillsetLang = styled.div`
  padding: 1em;

  @media screen and (max-width: 1200px) {
    padding-right: 0;
  }

  @media screen and (max-width: 720px) {
    padding-top: 50px;
  }

  @media screen and (max-width: 550px) {
    padding-top: 130px;
  }
`;

export const SkillsetSkill = styled.p`
  text-align: center;
  font-size: 20px;
  background-color: #ff9c9c;
  margin: 40px 60px 40px 0;

  width: 150px;
  height: 70px;
  padding-top: 22px;

  box-shadow: 4px 5px #888888;
  color: #972121;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1200px) {
    margin-right: 17px;
  }

  @media screen and (max-width: 720px) {
    padding-top: 20px;
    width: 100px;
    height: 60px;
    font-size: 15px;
  }
`;

export const SP = styled.div``;
