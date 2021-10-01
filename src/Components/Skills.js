import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import Particle from '../Components/Particle';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <Title title={'My Skills'} span={'my skills'} />
            <InnerLayout>
                <div className="skills">
                    <ProgressBar
                        title={'HTML5'}
                        width={'85%'}
                        text={'85%'}
                    />
                    <ProgressBar
                        title={'CSS3'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <ProgressBar
                        title={'JAVASCRIPT'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <ProgressBar
                        title={'PYTHON'}
                        width={'50%'}
                        text={'50%'}
                    />
                    <ProgressBar
                        title={'React JS'}
                        width={'35%'}
                        text={'35%'}
                    />
                </div>
            </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}    
.skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
