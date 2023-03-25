import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import World from './3D MODELS/World';

const Desc = styled.div`
    width: 200px;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 100px;
    right: 100px;
    color: #000;
    display: flex;
    height: min-content;
`;
export const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="sunset" intensity={0.6}>
                    <World />
                </Stage>
                <OrbitControls enableZoom={false} />
            </Canvas>
            <Desc>
                We design products with a strong focus on both world class
                design and ensurign your product is a market success.
            </Desc>
        </>
    );
};
