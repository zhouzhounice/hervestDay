import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();
// 创建相机
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000 );

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
// 设置渲染器大小为屏幕长宽
renderer.setSize( window.innerWidth, window.innerHeight );
// 将内容添加到html页面中
document.body.appendChild( renderer.domElement );

// 创建立方体并且设置长宽高比例
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// 设置材质及颜色
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// 生成立方体
const cube = new THREE.Mesh( geometry, material );
// 将立方体添加到场景中
scene.add( cube );

// 设置相机的z轴
camera.position.z = 5;

function animate() {
	// 设置旋转动画
	requestAnimationFrame( animate );
	
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	// 将相机与立方体渲染在渲染器中
	renderer.render( scene, camera );
}

animate();
