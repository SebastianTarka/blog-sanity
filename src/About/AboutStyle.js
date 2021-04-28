import styled from 'styled-components';

const AboutBox = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    place-items: center;
    @media (max-width: 785px) {
        grid-template-columns: 1fr;
    }
`
const AboutImages = styled.img`
    width: 450px;
    @media (max-width: 485px) {
        width: 100%;
    }
`
const AboutText = styled.h3`
    padding: 15px;
`
export {AboutBox, AboutImages, AboutText}