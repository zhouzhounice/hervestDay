import * as THREE from 'three';

const createMater = () =>{
    const pointsMaterial = new THREE.PointsMaterial();
    pointsMaterial.size = 0.05
    return pointsMaterial
}

export default createMater;