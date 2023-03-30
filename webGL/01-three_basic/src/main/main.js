// 利用集合体设置一个面

import * as THREE from 'three';
// 创建立方体并且设置长宽高比例
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 设置材质及颜色
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 生成立方体
const cube = new THREE.Mesh( geometry, material );
// 将立方体添加到场景中
// scene.add( cube );
console.log(cube)