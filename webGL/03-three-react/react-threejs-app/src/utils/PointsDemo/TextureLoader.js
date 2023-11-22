import * as THREE from 'three';

const textureLoader = () =>{
    const textureLoader = new THREE.TextureLoader();
    return textureLoader.load("./particles/3.png")
}

export default textureLoader;