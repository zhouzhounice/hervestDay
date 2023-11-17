// src/components/Cube.js
import * as THREE from 'three';

const createCube = () => {

    return new THREE.SphereGeometry(3,20,20);
};

export default createCube;
