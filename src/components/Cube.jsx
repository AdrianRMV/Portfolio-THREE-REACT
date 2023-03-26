import { RenderTexture, Text, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export const Cube = () => {
    const textRef = useRef();
    useFrame(
        (state) =>
            (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
    );
    return (
        <mesh>
            <boxGeometry />
            <meshStandardMaterial color="blue">
                <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={['#ddd']} />
                    <Text ref={textRef} fontSize={2.5} color="#555">
                        Hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};
