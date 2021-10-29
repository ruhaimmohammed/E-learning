import React from 'react'
import styled from 'styled-components'
import Tilt from 'react-tilt'
import HeroText from './HeroText'

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <InnerWrapper>
                    <Left>
                        <HeroText />
                    </Left>
                    <TiltWrapper options={{ max:20 }}>
                        <img src="/assets/e-learn.png" alt="Image" />

                    </TiltWrapper>
                </InnerWrapper>
            </Wrapper>
        </Container>
    )
}

export default Hero

const TiltWrapper = styled(Tilt)`
    width: 60%;
    @media(max-width: 844px){
        width: 100%;
        margin-top: 5vh;

    }
`

const Container = styled.div`
    height: 100vh;
    width: 100%;
    diplay: flex;
    justify-content: center;
    align-items: center;
    border: 0px solid white;
    background-size: cover;
    background-position: center;
`

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    
`

const InnerWrapper = styled.div`
      max-width: 1000px;
      height: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      img{
          width: 100%;
      }

      @media(max-width: 844px){
        text-align: center;
    }
      
`

const Left = styled.div`
      width: 40%;
      @media(max-width: 844px){
        width: 100%;
        margin-top: 20vh;
    }
`