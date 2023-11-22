// src/components/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import createScene from './utils/Scene';
import createCamera from './utils/Camera';
import createRenderer from './utils/Renderer';
import createAxesHelper from "./utils/AxesHelper";
import createControls from "./utils/Controls";
import createPoints from "./utils/PointsBase/Points";


const ThreeScene = () => {
  const sceneRef = useRef();
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();
  const points = createPoints(scene);

   createAxesHelper(scene);
  createControls(camera,renderer)

  useEffect(() => {
    // 将渲染器的输出附加到HTML容器中
    sceneRef.current.appendChild(renderer.domElement);

    // 添加动画
    const animate = () => {
      requestAnimationFrame(animate);

      // 渲染场景
      renderer.render(scene, camera);
    };

    animate();

    // 清理函数
    return () => {
      renderer.dispose();
    };
  }, [renderer, points,camera,scene]);
  // 监听画面变化，更新渲染画面
  window.addEventListener("resize", () => {
    //   console.log("画面变化了");
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    //   更新摄像机的投影矩阵
    camera.updateProjectionMatrix();

    //   更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    //   设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  return <div ref={sceneRef} />;
};

export default ThreeScene;
