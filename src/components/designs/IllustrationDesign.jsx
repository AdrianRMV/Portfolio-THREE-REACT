import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Skull from './3D MODELS/Skull';

const Desc = styled.div`
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 600px;
    right: -150px;
    color: #000;
    display: flex;
    height: min-content;
`;
export const IllustrationDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="city" intensity={0.6}>
                    <Skull />
                </Stage>
                <OrbitControls
                    enableZoom={false}
                    enableRotate={false}
                    autoRotate
                />
            </Canvas>
        </>
    );
};
