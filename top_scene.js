import * as BABYLON from '@babylonjs/core';
import 'babylon-vrm-loader';

export async function createScene(canvas, engine) {
  // シーンの作成
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

  var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);

  return scene;
}
