// 利用集合体设置一个面
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

// 目标：打造酷炫的三角形

// 创建场景
const scene = new THREE.Scene();
// 创建一个时钟
const clock = new THREE.Clock()
// 创建相机
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 );


// 创建渲染器
let renderer;
renderer = new THREE.WebGLRenderer();

// 设置渲染器大小为屏幕长宽
renderer.setSize( window.innerWidth, window.innerHeight );
// 将内容添加到html页面中
document.body.appendChild( renderer.domElement );

// 随机创建立方体
for (let i=0;i<50;i++){
    // 每个三角形需要三个顶点
    const geometry = new THREE.BufferGeometry();
    // 顶点数组
    const vertices =new Float32Array(9);
    for (let j=0;j<9;j++){
        vertices[j] = Math.random()*10 - 5
    }
    // 设置随机颜色
    let color = new THREE.Color(Math.random(),Math.random(),Math.random())
    // 设置面的属性
    geometry.setAttribute('position',new THREE.BufferAttribute(vertices,3))
// 设置材质及颜色
    const material = new THREE.MeshBasicMaterial( { color,transparent:true,opacity:0.5 } );
// 生成立方体
    const cube = new THREE.Mesh( geometry, material );
// 将立方体添加到场景中
    scene.add( cube );
    console.log(cube)
}


// 设置相机的z轴
camera.position.z = 5;
// 创建控制器
const controls = new OrbitControls(camera, renderer.domElement)
// 创建坐标轴
const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper)

function animate() {
    // 设置旋转动画
    // requestAnimationFrame( animate );
    //
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    // 将相机与立方体渲染在渲染器中

    // 获取两次时间的时间间隔
    // let delateTime = clock.getDelta();
    // console.log(delateTime)

    // 设置时钟
    // let time = clock.getElapsedTime();
    // cube.position.x = time % 5

    renderer.render( scene, camera );
    // 下一帧重新调用渲染函数
    requestAnimationFrame(animate)
}

animate();