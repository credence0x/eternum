/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 --types --keepnames --keepgroups --keepmeshes --transform public/models/hyperstructure-finished.glb 
Files: public/models/hyperstructure-finished.glb [133.63KB] > hyperstructure-finished-transformed.glb [78.06KB] (42%)
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CasinoInterface } from "../../../../hooks/helpers/useCasino";

type GLTFResult = GLTF & {
  nodes: {
    tower: THREE.Mesh;
    tower_1: THREE.Mesh;
    tower_2: THREE.Mesh;
    tower_3: THREE.Mesh;
  };
  materials: {
    Stone: THREE.MeshStandardMaterial;
    Gold: THREE.MeshStandardMaterial;
    Grass: THREE.MeshStandardMaterial;
    Foilage: THREE.MeshStandardMaterial;
  };
};

export default function CasinoFinished(
  props: JSX.IntrinsicElements["group"] & { casino?: CasinoInterface },
) {
  const { nodes, materials } = useGLTF("/models/hyperstructure-finished-transformed.glb") as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="tower_finished" position={[0, -0.096, 0]}>
          <mesh name="tower" geometry={nodes.tower.geometry} material={materials.Stone} />
          <mesh name="tower_1" geometry={nodes.tower_1.geometry} material={materials.Gold} />
          <mesh name="tower_2" geometry={nodes.tower_2.geometry} material={materials.Grass} />
          <mesh name="tower_3" geometry={nodes.tower_3.geometry} material={materials.Foilage} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/hyperstructure-finished-transformed.glb");
