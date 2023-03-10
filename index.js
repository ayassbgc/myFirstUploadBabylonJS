import './index.scss';

import { Engine } from '@babylonjs/core';
import { createScene } from './top_scene.js';

var canvas = document.getElementById('renderCanvas');
var engine = new Engine(canvas, true);

var scene = await createScene(canvas, engine);

engine.runRenderLoop(() => {
  scene.render();
});
