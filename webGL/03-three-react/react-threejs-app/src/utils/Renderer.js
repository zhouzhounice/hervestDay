// src/components/Renderer.js
import * as THREE from 'three';

const createRenderer = () => {
    // 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    return renderer;
};

export default createRenderer;
