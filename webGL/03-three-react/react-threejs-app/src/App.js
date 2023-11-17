// src/components/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import createScene from './utils/Scene';
import createCamera from './utils/Camera';
import createRenderer from './utils/Renderer';
import createAxesHelper from "./utils/AxesHelper";
import createControls from "./utils/Controls";
import createPoints from "./utils/Points";


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

  return <div ref={sceneRef} />;
};

export default ThreeScene;
