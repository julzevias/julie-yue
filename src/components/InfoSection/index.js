import React from 'react';
 
import { InfoBg, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, 
    TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements';
 
const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, description2, description3, img, alt }) => {
    return (
        <>
        <InfoBg>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        
                        <Subtitle darkText={darkText}>{description3}</Subtitle>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </InfoBg>
            
        </>
    )
}
 
export default InfoSection;
