import React from 'react'
import Particle from '../Components/Particle';
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import InterestCard from './InterestCard';
// import WebIcon from '@mui/icons-material/Web';
// import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
// import EngineeringIcon from '@mui/icons-material/Engineering';

function InterestSection() {
    return (
        <InnerLayout>
            <InterestSectionStyled>
                <div className="p-particles-js">
                    <Particle />
                </div>
                <div className="interest">
                    <InterestCard
                        title={'Web Development'}
                        paragraph={'seorang Developer yang berspesialisasi dalam pembangunan dan pemeliharaan situs web.'}
                    />
                    <div className="mid-card">
                        <InterestCard
                            title={'Multi-platform'}
                            paragraph={'Software Developer yang berspesialisasi dalam merancang dan membangun aplikasi yang dapat digunakan di berbagai sistem operasi populer seperti Android dan iOS. '}
                        />
                    </div>
                    <InterestCard
                        title={'Data Scientist'}
                        paragraph={'pakar dalam menggunakan data untuk model pelatihan.'}
                    />
                </div>
            </InterestSectionStyled>
        </InnerLayout>
    )
}

const InterestSectionStyled = styled.section`
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}    
.interest {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
export default InterestSection
