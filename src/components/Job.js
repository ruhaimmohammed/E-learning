import React from 'react'
import styled from 'styled-components'

const Job = () => {
    const cmy = [
        {
            "id": 1,
            "name": "Meta",
            "logo": "https://pbs.twimg.com/profile_images/1453818753880190978/HqrrEcrI_400x400.png"
        },
        {
            "id": 2,
            "name": "Apple",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/862px-Apple_logo_grey.svg.png"
        },
        {
            "id": 3,
            "name": "Amazon",
            "logo": "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
        },
        {
            "id": 4,
            "name": "Netflix",
            "logo": "https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png"
        },
        {
            "id": 5,
            "name": "Google",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
        }
    ]
    return (
        <Container>
            <h1>Get Job in Your <br /> Dream Company.</h1>
            <Wrap>
                {cmy.map(({ id, name, logo }) => (
                    <div>
                        <img key={id} src={logo} alt={name} />
                        <p>{name}</p>
                    </div>
                ))}
            </Wrap>
        </Container>
    )
}

export default Job

const Container = styled.div`
    display: flex;
    width: auto;
    height: auto;
    width: 100vw;
    padding: 50px;
    border-bottom: 7px solid #00000009;

    @media (max-width:1024px) {
        padding: 50px 20px;
    }

    @media (max-width:820px) {
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-size: 45px;
        margin-top: 20px;
        text-decoration: underline;
        text-shadow: 2px 2px 5px #008000d6;
        color:#008000d6 ;
        width: 50%;
        text-align: center;

    @media (max-width:820px) {
            width: 100%;
    }    
    
    @media (max-width:620px) {
        
            font-size: 35px;
        

    }
    @media (max-width:450px) {
        
            font-size: 30px;
    
    }
    
    }

   
    
`

const Wrap = styled.div`
    display: flex;
    width: 50%;

    @media (max-width:820px) {
        margin-top: 35px ;
        width: 100%;
        justify-content: center;

    }  
    
    div{
        text-align: center;
    }
    
img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 20px;

    @media (max-width:1024px) {
        width: 80px;
        height: 80px;
    }
    @media (max-width:550px) {
        width: 65px;
        height: 65px;
    }


}

p{
    font-weight: 600;
}
  

`