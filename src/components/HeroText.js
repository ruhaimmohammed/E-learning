import React from 'react'
import styled from 'styled-components'

const HeroText = () => {
    return (
        <Container>
            <h5>Education for all.</h5>
            <h1>Learn</h1>
            <h1>Anything.</h1>
            <h1>Anytime.</h1>
            <h1>Anywhere.</h1>
            <BtnContainer>
                <input type="email" placeholder="Enter your e-mail" />
                <button>Start Now</button>
            </BtnContainer>
        </Container>
    )
}

export default HeroText

const BtnContainer = styled.div`
    margin-top: 2rem;

    button{
        background-color: black;
        border: none;
        padding: 0.9rem 1.1rem;
        color: #fff; 
        border-radius: 8px;
        box-shadow: 0px 3px 12px black;
        margin-left: 15px;
        font-size: 0.8rem;
        cursor: pointer;

        @media(max-width:600px){
            margin-top: 15px;
        }

    }

    input{
        background-color: white;
        border: none;
        padding: 0.9rem 1.1rem;
        color: #000; 
        border-radius: 8px;
        box-shadow: 0px 3px 12px black;
        margin-left: 15px;
        font-size: 0.8rem;
        border: 2px solid grey;

        @media(max-width:600px){
            width: 230px;
        }
    }
`

const Container = styled.div`
    padding: 1rem;

    h5{
        color: #000;
        font-weight: 500;
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    h1{
        font-weight: 900;
        font-size: 3.5rem;
        
        &:nth-of-type(1){
            color:#0080008f;
        }
        &:nth-of-type(2){
            color:#008000c2;
        }
        &:nth-of-type(3){
            color:#008000d6;
        }
        &:nth-of-type(4){
            color:green;
        }
        
    }
    @media (max-width:620px) {
        
        h1{
            font-size: 2.9rem;
        }
        

    
`
