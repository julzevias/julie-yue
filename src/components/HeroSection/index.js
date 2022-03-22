import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowRight,
} from './HeroElements'
import '.'
const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Julie Yue</HeroH1>
        <HeroP>Front-End Developer</HeroP>
        <HeroBtnWrapper>
          <Button
            to="projects"
            smooth={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            offset={-80}
          >
            Learn More <ArrowRight />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
