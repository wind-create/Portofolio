import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import AwardsItem from './AwardsItem';
import Particle from '../Components/Particle';

function Awards() {
    return (
        <AwardsStyled>
            <div className="p-particles-js">
                <Particle />
            </div>
            <Title title={'Awards'} span={'Awards'} />
            <InnerLayout>
                <AwardsItem
                    title={'Core Team Developer Student Clubs USU 2020/2021'}
                    subTitle={'Developer Student Clubs'}
                />
                <AwardsItem
                    title={'Core Team Developer Student Clubs USU 2019/2020'}
                    subTitle={'Developer Student Clubs'}
                />
                <AwardsItem
                    title={'BigQuery Basic for Data Analyst'}
                    subTitle={'Qwiklabs'}
                />
                <AwardsItem
                    title={'BigQuery For Data Analysis'}
                    subTitle={'Qwiklabs'}
                />
                <AwardsItem
                    title={'Memulai Pemrograman Dengan Dart'}
                    subTitle={'Dicoding'}
                />
                <AwardsItem
                    title={'DevOps Praktis dengan IBM Cloud'}
                    subTitle={'Dicoding'}
                />
                <AwardsItem
                    title={'Belajar Membuat Aplikasi Kognitif'}
                    subTitle={'Dicoding'}
                />
                <AwardsItem
                    title={'Belajar Machine Learning untuk Pemula'}
                    subTitle={'Dicoding'}
                />
            </InnerLayout>
        </AwardsStyled>
    )
}
const AwardsStyled = styled.section`
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}
`;
export default Awards
