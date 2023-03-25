import { useState } from 'react';
import styled from 'styled-components';
import { DevelopmentDesign } from './designs/DevelopmentDesign';
import { IllustrationDesign } from './designs/IllustrationDesign';
import { ProductDesign } from './designs/ProductDesign';
import { SocialDesign } from './designs/SocialDesign';
import { WebDesign } from './designs/WebDesign';

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
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    gap: 100px;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    width: max-content;

    ::after {
        content: '${(props) => props.slot}';
        top: 0;
        left: 0;
        position: absolute;
        width: 0;
        color: pink;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        ::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const Right = styled.div`
    flex: 1;
    position: relative;
`;

export const Work = () => {
    const [work, setWork] = useState('Web Design');
    return (
        <Section>
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
