import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Fb from './3D MODELS/Fb';
export const SocialDesign = () => {
    return (
        <Canvas>
            <Stage environment="city" intensity={0.6}>
                <Fb />
            </Stage>
            <OrbitControls
                enableZoom={false}
                enableRotate={false}
                rotateSpeed={2}
                autoRotate
            />
        </Canvas>
    );
};
