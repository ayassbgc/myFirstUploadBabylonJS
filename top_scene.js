import * as BABYLON from '@babylonjs/core';
import 'babylon-vrm-loader';

export async function createScene(canvas, engine) {
  // シーンの作成
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

  // Our built-in 'sphere' shape. Params: name, options, scene
  let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.5}, scene);

  // Move the sphere upward 1/2 its height
  //sphere.position.y = 1;

  let ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 1, height: 1}, scene);
  ground.position.y = -0.25;

  return scene;
}