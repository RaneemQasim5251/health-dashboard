import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { useLoader } from '@react-three/fiber';

const ObjModel = () => {
  const materials = useLoader(MTLLoader, '/models/FinalBaseMesh.mtl');
  materials.preload();
  
  const obj = useLoader(OBJLoader, '/models/FinalBaseMesh.obj', (loader) => {
    loader.setMaterials(materials);
  });

  return (
    <primitive 
      object={obj} 
      scale={[0.27, 0.27, 0.27]}  
      position={[0, -2, 0]}  
      rotation={[0, 0.5, 0]} // إضافة دوران بطيء
    />
  );
};

const ThreeDModel = () => {
  return (
    <div className="three-d-model">
      <Canvas style={{ height: '600px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <ObjModel />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
