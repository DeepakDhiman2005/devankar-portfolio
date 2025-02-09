"use client";

import { useGLTF } from '@react-three/drei';
import React from 'react';

type BootProps = React.ComponentProps<'group'>;

const Boot: React.FC<BootProps> = (props) => {
    const { nodes, materials } = useGLTF('/models/robot_ball.glb') as any;


    return <>
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.318}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.material_0}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.material_0}
                />
            </group>
        </group>
    </>
}

useGLTF.preload('/models/robot_ball.glb');

export default Boot;