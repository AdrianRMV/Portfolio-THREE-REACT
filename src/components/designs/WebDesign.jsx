import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Macbook from './3D MODELS/Macbook';

export const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="apartment" intensity={0.6}>
                    <Macbook />
                </Stage>
                <OrbitControls
                    enableZoom={false}
                    enableRotate={false}
                    autoRotate
                    rotateSpeed={2}
                />
            </Canvas>
        </>
    );
};
