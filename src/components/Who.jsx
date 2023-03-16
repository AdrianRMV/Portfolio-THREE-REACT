import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Cube } from './Cube';
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
`;

const Left = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.div`
    font-size: 74px;
    font-weight: 500;
`;

const WhatWeDo = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Description = styled.p`
    font-size: 24px;
    color: lightgray;
`;

const Button = styled.button`
    background-color: #da4ea2;
    border: none;
    font-weight: 500;
    border-radius: 5px;
    padding: 10px;
    width: max-content;
    color: #fff;
    cursor: pointer;
`;

export const Who = () => (
    <Section>
        <Container>
            <Left>
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Cube />
                </Canvas>
            </Left>
            <Right>
                <Title>Think outside the square space</Title>
                <WhatWeDo>
                    <Line src="../img/line.png"></Line>
                    <Subtitle> Who we Are</Subtitle>
                </WhatWeDo>
                <Description>
                    a creative group of designers and developers witha a pasion
                    for the arts.
                </Description>
                <Button>Show our works</Button>
            </Right>
        </Container>
    </Section>
);
