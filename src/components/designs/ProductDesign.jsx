import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Skull from './Skull';
export const ProductDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Skull />
            </Stage>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};
