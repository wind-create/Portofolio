import React from 'react'
import styled from 'styled-components';
import Particle from '../Components/Particle';
import me from '../img/me.JPG'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <div className="left-content">
                <img src={me} alt="me image" />
            </div>
            <div className="right-content">
                <h4>I am <span>Willi Nardo</span></h4>
                <p className="paragraphy">Passionate and highly motivated student working
                    towards a Bachelor of Teknologi Informasi at
                    Universitas Sumatera Utara. Honest, responsible,
                    cooperative, and eager to learn. Have a deep interest
                    in web development, multiplatform, and data-science
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Status</p>
                    </div>
                    <div className="info">
                        <p>: Willi Nardo</p>
                        <p>: 22</p>
                        <p>: Indonesia</p>
                        <p>: English, Indonesia</p>
                        <p>: Medan, Indonesia</p>
                        <p>: Student at Universitas Sumatera Utara</p>
                    </div>
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .p-particles-js{
        position: absolute;
        top: 0;
        left: 0;
    }
    .left-content{
        width: 100%;
        height: 45vh;
        img{
            width: 90%;
            height: 140%;
            object-fit: cover;
        }
    }
    .right-content{
        padding-bottom: 1.4rem;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection
