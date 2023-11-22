// src/components/Cube.js
import * as THREE from 'three';

const createCube = () => {
    const sphereGeometry = new THREE.SphereGeometry(3,30,30);
    delete sphereGeometry.attributes.uv;
    return sphereGeometry
};

export default createCube;
