import React, { useState } from 'react'
import styled from 'styled-components'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Container>
                <img id="logo" src="/assets/logo.png" alt="Logo" />
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink href="#contact">Contact</MenuLink>
                        <MenuLink href="#">Login</MenuLink>
                        <Button>Join Now</Button>
                    </LinkWrapper>
                </Menu>

            </Container>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: auto;
    padding: 2rem;

`

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media (max-width:768px) {
        flex-direction: column;
        overflow: hidden;
        border-radius: 1rem;
        margin-top: 1rem; 
        box-shadow: -4px 8px 15px 1 #000;
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")} ;
        width: 100%;
        transition: max-height 0.25s ease-in-out;

    }
`

const LinkWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 1.5rem 0;

    @media (max-width:768px) {
        flex-direction: column;
        background-color: #e2f2ce;
        width: 85%;
        border-radius: 15px;

    }
`

const MenuLink = styled.a`

            text-decoration: none;
            color: green;
            font-size: 0.9rem;
            padding: 0.5rem 1.5rem;
            margin: 10px;
            font-weight: 500;
            border-radius: 0.5rem;

            &:hover{
                background-color: #8080807a;
                transition: all 0.2s ease-in;
            }
            @media (max-width:768px) {
                margin: 0px;
                }
            
`

const Button = styled.button`
    font-size: 0.8rem;
    color: #fff;
    background-color: green;
    padding: 10px;
    border: none;
    border-radius: 0.7rem;
    box-shadow: 0px 3px 12px green;
    cursor: pointer;

    &:hover{
        transform:translateY(-3.5px);
        transition: 0.2s ease-out;
    }
    @media (max-width:768px) {
        margin-top: 10px;
        }

    }

    @media (max-width:700px) {
        /* padding: 0.3rem; */
    }
`

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
 
    span{
        height: 2px;
        width: 25px;
        background-color: green;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width:768px) {
        display: flex;
    }
`





