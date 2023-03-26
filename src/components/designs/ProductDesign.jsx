import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
// import World from './3D MODELS/World';
import Canon from './3D MODELS/Canon';
export const ProductDesign = () => {
    return (
        <>
            <Canvas>
                <Stage environment="night" intensity={0}>
                    <Canon />
                </Stage>
                <OrbitControls
                    enableZoom={false}
                    enableRotate={false}
                    rotateSpeed={2}
                    autoRotate
                />
            </Canvas>
        </>
    );
};
