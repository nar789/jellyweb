/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Sad(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sad.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{

    actions.sady.play();
    actions.walk.play();

  },[]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Circle">
          <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
            <primitive object={nodes.mixamorigHips} />
            <skinnedMesh name="rabbit001" geometry={nodes.rabbit001.geometry} material={materials['Material.001']} skeleton={nodes.rabbit001.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sad.glb')
