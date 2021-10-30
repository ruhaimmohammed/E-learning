import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <div id="contact">
                <h1>Learn & Burn</h1>
                <p>copyright &copy; 2021</p>
            </div>
            <div id="contact">
                <h2>Write us on:</h2>
                <p>learnandburn@elearn.com</p>
            </div>
            <div id="contact">
                <h2>Social Media:</h2>
                <p>Youtube</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
                <p>Instagram</p>
            </div>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    justify-content:space-between ;
    background-color: black;
    color: white;
    padding: 80px 250px 50px 250px;
    flex-wrap: wrap;
    margin-top: 20px;

    @media(max-width:980px){
        flex-direction: column;
        padding: 65px 120px 35px 100px;
    }

    @media(max-width:600px){
        padding: 65px 120px 35px 75px;
    }

    div{
        margin: 15px;
    }

    p{
        margin: 13px;
    }
`
