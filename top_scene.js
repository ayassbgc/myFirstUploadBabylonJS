import * as BABYLON from '@babylonjs/core';
import 'babylon-vrm-loader';

export async function createScene(canvas, engine) {
  // シーンの作成
  const scene = await BABYLON.SceneLoader.LoadAsync(
    'https://raw.githubusercontent.com/ayassbgc/MyFileUploadForBabylonjs/main/',
    'takahashi.vrm',
    engine
  );
  const vrmManager = scene.metadata.vrmManagers[0];

  // Update secondary animation
  scene.onBeforeRenderObservable.add(() => {
    vrmManager.update(scene.getEngine().getDeltaTime());
  });

  // Model Transformation
  vrmManager.rootMesh.translate(new BABYLON.Vector3(1, 0, 0), 1);

  // Work with HumanoidBone
  vrmManager.humanoidBone.leftUpperArm.addRotation(0, 1, 0);

  // Work with BlendShape(MorphTarget)
  vrmManager.morphing('Joy', 1.0);

  scene.createDefaultCameraOrLight(true, true, true);

  return scene;
}
