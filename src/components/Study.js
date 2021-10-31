import React from 'react'
import styled from 'styled-components'

const Study = () => {
    const languages = [
        {
            "id": 1,
            "name": "C++",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        },
        {
            "id": 2,
            "name": "C#",
            "logo": "https://www.avenga.com/wp-content/uploads/2020/11/C-Sharp.png"
        },
        {
            "id": 3,
            "name": "Java",
            "logo": "https://logoeps.com/wp-content/uploads/2011/06/java-logo-vector.png"
        },
        {
            "id": 4,
            "name": "Javascript",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
        },
        {
            "id": 5,
            "name": "Python",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
        },
        {
            "id": 6,
            "name": "Kotlin",
            "logo": "https://www.logo.wine/a/logo/Kotlin_(programming_language)/Kotlin_(programming_language)-Logo.wine.svg"
        },
        {
            "id": 7,
            "name": "Swift",
            "logo": "https://developer.apple.com/swift/images/swift-og.png"
        },
        {
            "id": 8,
            "name": "Android Studio",
            "logo": "https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png"
        },
        {
            "id": 9,
            "name": "Php",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
        },
        {
            "id": 10,
            "name": "Dart",
            "logo": "https://avatars.githubusercontent.com/u/1609975?s=280&v=4"
        },
        {
            "id": 11,
            "name": "Ruby",
            "logo": "https://www.pngitem.com/pimgs/m/12-120179_best-free-ruby-png-ruby-programming-language-logo.png"
        }
    ]


        const frameworks = [
            {
                "id": 1,
                "name": "React",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            },
            {
                "id": 2,
                "name": "Vue.js",
                "logo": "https://avatars.githubusercontent.com/u/6128107?s=280&v=4"
            },
            {
                "id": 3,
                "name": "Django",
                "logo": "https://cdn.worldvectorlogo.com/logos/django.svg"
            },
            {
                "id": 4,
                "name": "TensorFlow",
                "logo": "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png"
            },
            {
                "id": 5,
                "name": "Vaadin",
                "logo": "https://vaadin.com/images/trademark/PNG/VaadinLogomark_RGB_1000x1000.png"
            },
            {
                "id": 6,
                "name": "Tailwind",
                "logo": "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png"
            },
            {
                "id": 7,
                "name": "Bootstrap",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
            },
            {
                "id": 8,
                "name": "Next.js",
                "logo": "https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
            },
            {
                "id": 9,
                "name": "Ruby on Rails",
                "logo": "https://pbs.twimg.com/media/CZGHPChUAAA3jqE.png:large"
            },
            {
                "id": 10,
                "name": "Ruby Gems",
                "logo": "https://cdn.iconscout.com/icon/free/png-256/rubygems-283026.png"
            },
            {
                "id": 11,
                "name": "Fuel Php",
                "logo": "https://www.freelancinggig.com/blog/wp-content/uploads/2018/02/FuelPHP-Framework-guide.jpg"
            }
        ]

    return (
        <Container>
            <h1>Programming Languages.</h1>
            <Language>
                
                {languages.map(({ id, name, logo}) => (
                    <div>
                    <img key={id} src={ logo } alt={ name }  />
                    <p>{ name }</p>
                    </div>
                    ))}
                    
            </Language>
            <h1>Frameworks and Libraries.</h1>
            <Frameworks>
            {frameworks.map(({ id, name, logo}) => (
                    <div>
                    <img key={id} src={ logo } alt={ name }  />
                    <p>{ name }</p>
                    </div>
                    ))}
            </Frameworks>
        </Container>
    )
}

export default Study

const Container = styled.div`
    text-align: center;

    h1{
        font-size: 45px;
        margin-top: 20px;
        text-shadow: 2px 2px 4px #008000d6;
        color:#008000d6 ;
    }
    @media (max-width:620px) {
        
        h1{
            font-size: 35px;
        }
        @media (max-width:450px) {
        
            h1{
                font-size: 30px;
            }
`

const Language = styled.div`
    display: flex;
    width: auto;
    height: auto;
    border-radius: 10px;
    width: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 50px;

    div{
        position: relative;
        height: 200px;
        border: 0.1px solid grey;
        margin: 10px;
        padding: 8px;
        border-radius: 12px;
        text-align: center;
        box-shadow: 5px 5px 10px #909090e3;

        &:hover{
            transform: scale(1.1);
            transform-origin: center;
            transition: 0.2s;
        }
 
    }
    
    img{
        height: 120px;
        width: 120px;
        object-fit: cover;
        margin-bottom: 20px;
    }
    p{
        font-weight: 600;
    }

    &::-webkit-scrollbar {
        display: none;
      }

    @media (max-width:620px) {
         padding: 30px;
        }
`

const Frameworks = styled.div`
display: flex;
width: auto;
height: auto;
width: auto;
overflow-x: scroll;
overflow-y: hidden;
padding: 50px;
border-bottom: 7px solid #00000009;


div{
    position: relative;
    height: 200px;
    border: 0.1px solid grey;
    margin: 10px;
    padding: 8px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 5px 5px 10px #909090e3;

    &:hover{
        transform: scale(1.1);
        transform-origin: center;
        transition: 0.2s;
    }

}
img{
    height: 120px;
    width: 120px;
    object-fit: cover;
    margin-bottom: 20px;
}
p{
    font-weight: 600;
}

&::-webkit-scrollbar {
    display: none;
  }

@media (max-width:620px) {
    padding: 30px;
   }
`


