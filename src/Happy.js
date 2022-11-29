/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Happy(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/happy.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(()=>{
    actions.happy.play();
  },[])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="happy" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="rabbit001" geometry={nodes.rabbit001.geometry} material={materials['Material.001']} skeleton={nodes.rabbit001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/happy.glb')
