import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Macbook from './3D MODELS/Macbook';
import styled from 'styled-components';

const Desc = styled.div`
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: -230px;
    color: #000;
    display: flex;
    height: min-content;
`;

export const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Macbook />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                doloribus laborum cumque labore facere commodi.
            </Desc>
        </>
    );
};
