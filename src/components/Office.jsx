
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;
export function Office(props) {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb");
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration())
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
  
    tl.current.to(
        ref.current.position, 
        { 
          duration: 2, 
          y: FLOOR_HEIGHT * (NB_FLOORS - 1), 
          ease: "power4.out" 
        },
        0
    )
  }, [])
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes["01_office"].geometry}
        material={materials["01"]}
      />
      <mesh
        geometry={nodes["02_library"].geometry}
        material={materials["02"]}
        position={[0, 2.114, -2.23]}
      />
      <mesh
        geometry={nodes["03_attic"].geometry}
        material={materials["03"]}
        position={[-1.97, 4.227, -2.199]}
      />
    </group>
  );
}

useGLTF.preload("./models/WawaOffice.glb");