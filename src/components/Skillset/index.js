import React from 'react'
import { SkillsetBg, SkillsetContainer, SkillsetH1, SP, SkillsetDescp, SkillsetP, SkillsetAttributes, SkillsetStrength, SkillsetLang, SkillsetSkill } from './SkillsetElements'
 
const Skillset = () => {
    return (
        <SkillsetBg id="skillset">
        <SkillsetContainer>
            <SP>
                <SkillsetAttributes>
                    <SkillsetStrength>Enthusiastic</SkillsetStrength>
                    <SkillsetStrength>Passionate </SkillsetStrength>
                    <SkillsetStrength>Dedicated </SkillsetStrength>
                    <SkillsetStrength>Creative </SkillsetStrength>
                    <SkillsetStrength>Adaptable</SkillsetStrength>
                    <SkillsetStrength>Artistic </SkillsetStrength>
                </SkillsetAttributes>
            </SP>
 
                <SkillsetDescp>
                    <SkillsetH1>Skillset</SkillsetH1>
                    <SkillsetP>Since my start as an aspiring web developer, I have done my utmost to acquire the knowledge needed to make fully functional and beautiful interfaces using methodical code. To that end, I built small and medium web apps, features, animations, and interactive layouts in my free time. Gradually, I developed efficient ways to build my applications.<br/><br/>
                    Although I am making front end development my end goal, I do have experience with full-stack development; in fact, my years at college were mostly only backend. </SkillsetP>
                </SkillsetDescp>
                
                <SkillsetLang>
                    <SkillsetSkill>HTML</SkillsetSkill>
                    <SkillsetSkill>CSS</SkillsetSkill>
                    <SkillsetSkill>Javascript</SkillsetSkill>
                    <SkillsetSkill>React</SkillsetSkill>
                    <SkillsetSkill>JQuery</SkillsetSkill>
                </SkillsetLang>  
                            
            
        </SkillsetContainer>
        </SkillsetBg>
    )
}
 
export default Skillset;
 
