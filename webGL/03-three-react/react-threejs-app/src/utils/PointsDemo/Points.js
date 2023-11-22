import * as THREE from 'three';
import createCube from "./Cube";
import createMaterial from "./Material";

const createPoints = (scene) =>{
    const points = new THREE.Points(createCube(),createMaterial());
    scene.add(points)
    return points
}

export default createPoints;