// src/components/ThreeScene.js
import React, { useEffect, useRef } from 'react';
import createScene from './utils/Scene';
import createCamera from './utils/Camera';
import createRenderer from './utils/Renderer';
import createCube from './utils/Cube';

const ThreeScene = () => {
  const sceneRef = useRef();
  const scene = createScene();
  const camera = createCamera();
  const renderer = createRenderer();
  const cube = createCube(scene);

  useEffect(() => {
    // 将渲染器的输出附加到HTML容器中
    sceneRef.current.appendChild(renderer.domElement);

    // 添加动画
    const animate = () => {
      requestAnimationFrame(animate);

      // 旋转立方体
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      // 渲染场景
      renderer.render(scene, camera);
    };

    animate();

    // 清理函数
    return () => {
      renderer.dispose();
    };
  }, [renderer, cube]);

  return <div ref={sceneRef} />;
};

export default ThreeScene;
