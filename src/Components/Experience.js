import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Particle from '../Components/Particle';
import Title from '../Components/Title';
import ExperienceItem from './ExperienceItem';

function Experience() {
    return (
        <ExperienceStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <Title title={'Experience'} span={'Experience'} />
            <InnerLayout>
                <div className="experience-content">
                    <ExperienceItem
                        year={'Sep 2021 - Present'}
                        title={'Teaching Assistant of ITLG'}
                        subTitle={'IT USU Laboratory Group'}
                        text={'Teaching Assistant for Artificial Inteligent in Universitas Sumatera Utara '}
                    />
                    <ExperienceItem
                        year={'July 2019 - July 2021'}
                        title={'Core Team of DSC USU'}
                        subTitle={'Developer Student Clubs'}
                        text={'community groups for college and university students interested in Google'}
                    />
                    <ExperienceItem
                        year={'May 2020 - May 2021'}
                        title={'Member of Litbang HIMATIF USU'}
                        subTitle={'Himpunan Mahasiswa Teknologi Informasi'}
                        text={'Teknologi Informasi Student Association, Universitas Sumatera Utara '}
                    />
                </div>
            </InnerLayout>
        </ExperienceStyled>
    )
}
const ExperienceStyled = styled.section`
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}
`;
export default Experience
