import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Macbook from './Macbook';
export const WebDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Macbook />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};
