import React from 'react'
import styled from 'styled-components'


function AwardsItem({ title, subTitle }) {
    return (
        <AwardsItemStyled>
            <div className="content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
            </div>
        </AwardsItemStyled>
    )
}

const AwardsItemStyled = styled.div`
display: flex;
@media screen and (max-width: 421px){
    p, h5, h6{
        font-size: 80%;
    }
}
&:not(:last-child){
    padding-bottom: 1rem;
}

.content{
    padding-left: 5rem;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        height: 2px;
        width: 3rem;
        background-color: var(--border-color);
    }
    h5{
        color: var(--primary-color);
        font-size: 1.2rem;
        padding-bottom: .4rem;
    }
    h6{
        padding-bottom: .6rem;
        font-size: .7rem;
    }
}
`;
export default AwardsItem
