import { MeshDistortMaterial, Sphere, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Navbar } from './Navbar';
const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Title = styled.div`
    font-size: 74px;
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
    width: 100px;
    color: #fff;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
    inset: 0;
    margin: auto;
    animation: animate 2.5s infinite ease-in-out alternate;

    @keyframes animate {
        to {
            transform: translateY(18px);
        }
    }
`;

export const Hero = () => (
    <Section>
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
                            color="#2f064f"
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
