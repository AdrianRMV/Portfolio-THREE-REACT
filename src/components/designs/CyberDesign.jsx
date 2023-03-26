import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cyber from './3D MODELS/Cyber';
export const CyberDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Cyber />
            </Stage>
            <OrbitControls enableZoom={false} enableRotate={false} autoRotate />
        </Canvas>
    );
};
