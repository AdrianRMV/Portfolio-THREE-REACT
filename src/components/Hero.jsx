import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Navbar } from './Navbar';
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`;

const Title = styled.h1`
    font-size: 74px;
    @media only screen and (max-width: 768px) {
        text-align: center;
    }
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #828282;
`;

const Description = styled.p`
    font-size: 24px;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
    }
`;

const Button = styled.button`
    background: rgb(130, 130, 130);
    background: -moz-linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(130, 130, 130, 1) 0%,
        rgba(84, 84, 84, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#828282",endColorstr="#545454",GradientType=1);
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
    @keyframes animate {
        to {
            transform: translateY(20px);
        }
    }
`;

export const Hero = () => (
    <Section id="HeroSection">
        <Navbar />
        <Container>
            <Left>
                <Title>Think. Make. Solve</Title>
                <WhatWeDo>
                    <Line src="../img/line.png"></Line>
                    <Subtitle>What we do</Subtitle>
                </WhatWeDo>
                <Description>
                    we enjoy creating delightful, human-centered digital
                    experiences.
                </Description>
                <Button>Learn More</Button>
            </Left>
            <Right>
                <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Sphere args={[1, 100, 200]} scale={1.4}>
                        <MeshDistortMaterial
                            color="#262525"
                            attach="material"
                            distort={0.5}
                            speed={2}
                        />
                    </Sphere>
                </Canvas>
                <Img src="../img/moon.png" />
            </Right>
        </Container>
    </Section>
);
