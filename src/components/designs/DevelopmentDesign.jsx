import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PcVintage from './3D MODELS/PcVintage';
export const DevelopmentDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <PcVintage />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};
