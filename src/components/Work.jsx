import { useState } from 'react';
import styled from 'styled-components';
import { DevelopmentDesign } from './designs/DevelopmentDesign';
import { IllustrationDesign } from './designs/IllustrationDesign';
import { ProductDesign } from './designs/ProductDesign';
import { SocialDesign } from './designs/SocialDesign';
import { WebDesign } from './designs/WebDesign';
import { CyberDesign } from './designs/CyberDesign';
const data = [
    'Web Design',
    'Development',
    'Illustration',
    'Product Design',
    'Social Media',
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    color: black;
    font-size: 14px;
    font-weight: 300;
`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        justify-content: center;
    }
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media only screen and (max-width: 768px) {
        padding: 0 !important;
        text-align: center;
    }
`;

const ListItem = styled.li`
    font-size: 70px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    transition: 300ms ease-in-out;
    @media only screen and (max-width: 768px) {
        font-size: 24px;
        color: #fff;
        -webkit-text-stroke: 0px;
    }
    width: max-content;
    ::after {
        content: '${(props) => props.text}';
        position: absolute;
        top: 0;
        left: 0;
        color: pink !important;
        width: 0px;
        overflow: hidden;
        white-space: nowrap;
    }
    &:hover {
        ::after {
            animation: moveText 0.5s linear both;
            @keyframes moveText {
                to {
                    width: 100% !important;
                }
            }
        }
    }

    /* @media only screen and (max-width: 768px) { */
    &:hover,
    &:active,
    &:scope {
        transform: scale(1.3);
    }
    /* } */
`;

const Right = styled.div`
    flex: 1;
    position: relative;
`;

export const Work = () => {
    const [work, setWork] = useState('Web Design');
    return (
        <Section id="WorksSection">
            <Container>
                <Left>
                    <List>
                        {data.map((singleData) => (
                            <ListItem
                                key={singleData}
                                slot={singleData}
                                onClick={() => setWork(singleData)}
                            >
                                {singleData}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right>
                    {work === 'Web Design' ? (
                        <WebDesign />
                    ) : work === 'Development' ? (
                        <DevelopmentDesign />
                    ) : work === 'Illustration' ? (
                        <IllustrationDesign />
                    ) : work === 'Product Design' ? (
                        <ProductDesign />
                    ) : (
                        <SocialDesign />
                    )}
                </Right>
            </Container>
        </Section>
    );
};
