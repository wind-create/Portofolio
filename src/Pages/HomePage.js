import React from 'react'
import Particle from '../Components/Particle';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Willi Nardo</span></h1>
                <p>
                    Passionate and highly motivated student working
                    towards a Bachelor of Teknologi Informasi at
                    Universitas Sumatera Utara. Honest, responsible,
                    cooperative, and eager to learn. Have a deep interest
                    in web development, multiplatform, and data-science
                </p>
                <div className="icons">
                    <a href="https://www.instagram.com/willi_nardo/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://github.com/wind-create" className="icon i-github">
                        <GitHubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/willi-nardo" className="icon i-linkedin">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%
    }
    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 1rem;
                
            }
            svg{
                margin: 0.5rem;

            }
        }
        .i-github{
            &:hover{
                border: 2px solid #5f4687;
                color: #5f4687;
            }
        }
        .i-instagram{
            &:hover{
                border: 2px solid #3f729b;
                color: #3f729b;
            }
        }
        .i-linkedin{
            &:hover{
                border: 2px solid #3f729b;
                color: #007bff;
            }
        }
    }
`;

export default HomePage;
