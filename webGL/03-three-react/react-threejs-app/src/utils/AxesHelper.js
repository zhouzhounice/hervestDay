
import * as THREE from 'three';

const createAxesHelper = (scene) => {
    // 创建立方体
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    return axesHelper;
};

export default createAxesHelper;