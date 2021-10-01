import React from 'react'
import styled from 'styled-components'
import InterestSection from '../Components/InterestSection';
import { MainLayout } from '../styles/Layouts'
import Title from '../Components/Title';

function InterestPage() {
    return (
        <MainLayout>
            <Title title={'Interest'} span={'interest'} />
            <InterestSection />
        </MainLayout>
    )
}

const InterestPageStyled = styled.section``;
export default InterestPage
