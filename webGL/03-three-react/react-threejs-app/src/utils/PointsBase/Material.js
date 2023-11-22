import * as THREE from 'three';
import createTexture from "./TextureLoader"


const createMater =  () =>{
        const texture = createTexture();
        const pointsMaterial = new THREE.PointsMaterial();
        pointsMaterial.size = 0.05;
        pointsMaterial.color.set(0xfff000);
        // 相机深度而衰减
        pointsMaterial.sizeAttenuation = true;

        pointsMaterial.map = texture
        pointsMaterial.alphaMap = texture
        pointsMaterial.transparent = true
        pointsMaterial.depthWrite=false
        // 亮度叠加
        pointsMaterial.blending = THREE.AdditiveBlending;
        return pointsMaterial;
}

export default createMater;