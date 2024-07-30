import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { a } from '@react-spring/three';
import pcScene from '../assets/pc.glb'; // Ensure this path is correct

const PC = (props) => {
  const pcRef = useRef();
  const { nodes, materials } = useGLTF(pcScene);

  return (
    <a.group ref={pcRef} {...props} scale={[0.8,0.8,0.8]}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.computer_details} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.computer_keyboard} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.computer_main_body} />
      <group position={[0.542, -0.111, -4.23]}>
        <mesh geometry={nodes.Object_14.geometry} material={materials.cable} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials.connector} />
      </group>
      <group position={[0, 0.368, -2.43]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.monitor_black} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.monitor_white} />
        <mesh castShadow receiveShadow geometry={nodes.Object_19.geometry} material={materials.monitor_screen} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.monitor_white}
          position={[1.265, -0.148, 2.24]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
      <mesh geometry={nodes.Object_8.geometry} material={materials.peripherals} position={[3.182, 0.071, -2.601]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.peripherals} position={[4.297, 0.478, 1.302]} rotation={[0, 0.602, 0]} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.peripherals} position={[-4.423, 1.212, -1.111]} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.monitor_plug} position={[0.003, 2.252, -2.083]} />
    </a.group>
  );
};

export default PC;
