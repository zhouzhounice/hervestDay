import * as THREE from 'three';

const textureLoader = () =>{
    const textureLoader = new THREE.TextureLoader();
    return textureLoader.load("./1.png")
}

export default textureLoader;