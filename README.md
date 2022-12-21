## 環境構築手順
### プロジェクト作成
npm init vite@latest
cd babylon-vite
npm install -y

### モジュール追加
npm install @babylonjs/core
npm install babylonjs-gui
npm install sass

### ソースコードの注意点
* index.html
    * \<script src="/main.js"\>に、type="module"を追加する
    * scssを使用する場合は、\<link rel="stylesheet"\>を削除し、ルートJS（index.js）にインポートさせる
* *.js
    * babylonjsのインポートは @babylonjs/core と記述する。（ES6 package版を使用するらしい） 

## 参考情報
[How to use BabylonJS with Vue](https://doc.babylonjs.com/extensions/Babylon.js+ExternalLibraries/BabylonJS_and_Vue/BabylonJS_and_Vue_1)