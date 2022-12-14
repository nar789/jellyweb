/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Chrismas(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/chrismas.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{
    actions.happy.play();
  },[])

  return (
    <group ref={group} {...props} dispose={null} position={[0,-6,-20]}>
      <group name="Scene">
        <group name="Armature" position={[-0.18, 1.94, 10.76]} rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="rabbit001" geometry={nodes.rabbit001.geometry} material={materials['Material.003']} skeleton={nodes.rabbit001.skeleton} />
        </group>
        <group name="chrismas" position={[0, 12.76, 0]} scale={0.1}>
          <mesh name="Icosphere090" geometry={nodes.Icosphere090.geometry} material={materials.Cloud} />
          <mesh name="Icosphere090_1" geometry={nodes.Icosphere090_1.geometry} material={materials.Wood_house} />
          <mesh name="Icosphere090_2" geometry={nodes.Icosphere090_2.geometry} material={materials.Metall} />
          <mesh name="Icosphere090_3" geometry={nodes.Icosphere090_3.geometry} material={materials.Glass_darken} />
          <mesh name="Icosphere090_4" geometry={nodes.Icosphere090_4.geometry} material={materials.Wood_house2} />
          <mesh name="Icosphere090_5" geometry={nodes.Icosphere090_5.geometry} material={materials.wall} />
          <mesh name="Icosphere090_6" geometry={nodes.Icosphere090_6.geometry} material={materials.Snow} />
          <mesh name="Icosphere090_7" geometry={nodes.Icosphere090_7.geometry} material={materials.Lamp_glass} />
          <mesh name="Icosphere090_8" geometry={nodes.Icosphere090_8.geometry} material={materials.Leaves} />
          <mesh name="Icosphere090_9" geometry={nodes.Icosphere090_9.geometry} material={materials.gold_candy} />
          <mesh name="Icosphere090_10" geometry={nodes.Icosphere090_10.geometry} material={materials.red_candy} />
          <mesh name="Icosphere090_11" geometry={nodes.Icosphere090_11.geometry} material={materials.Leaves_2} />
          <mesh name="Icosphere090_12" geometry={nodes.Icosphere090_12.geometry} material={materials['Material.001']} />
          <mesh name="Icosphere090_13" geometry={nodes.Icosphere090_13.geometry} material={materials['Material.002']} />
          <mesh name="Icosphere090_14" geometry={nodes.Icosphere090_14.geometry} material={materials.Emission_yellow} />
          <mesh name="Icosphere090_15" geometry={nodes.Icosphere090_15.geometry} material={materials.white_candy} />
          <mesh name="Icosphere090_16" geometry={nodes.Icosphere090_16.geometry} material={materials.Wood} />
          <mesh name="Icosphere090_17" geometry={nodes.Icosphere090_17.geometry} material={materials.Wire} />
          <mesh name="Icosphere090_18" geometry={nodes.Icosphere090_18.geometry} material={materials.Emission_red} />
          <mesh name="Icosphere090_19" geometry={nodes.Icosphere090_19.geometry} material={materials.ground} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/chrismas.glb')
