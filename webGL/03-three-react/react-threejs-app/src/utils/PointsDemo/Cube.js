import * as THREE from "three"

const createCube = () =>{
    const particlesGeometry = new THREE.BufferGeometry();
    delete particlesGeometry.attributes.uv;
    const count = 5000;

// 设置缓冲区数组
    const positions = new Float32Array(count*3);
// const colors = new

// 设置顶点
    for(let i=0;i<count*3;i++){
        positions[i] = Math.random()*5;
    }
    particlesGeometry.setAttribute(positions,3)
    return particlesGeometry
}

export default createCube;
