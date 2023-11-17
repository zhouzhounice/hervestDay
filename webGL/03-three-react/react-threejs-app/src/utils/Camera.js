// src/components/Camera.js
import * as THREE from 'three';

const createCamera = () => {
    // 创建相机
    const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    return camera;
};

export default createCamera;
