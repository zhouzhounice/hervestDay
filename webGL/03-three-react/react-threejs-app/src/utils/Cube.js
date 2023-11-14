// src/components/Cube.js
import * as THREE from 'three';

const createCube = (scene) => {
    // 创建立方体
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    return cube;
};

export default createCube;
