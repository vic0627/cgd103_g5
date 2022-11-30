import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { droneModels } from './CustomizeGlb';
import gsap from 'gsap';

export let  scene, renderer, camera, modelObj, directionalLight, spotLight1, spotLight2, controls;




export function sceneInit () {
    let ww = customize3d.width, wh = customize3d.height;
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( scene.background, 1, 1000 );
    renderer = new THREE.WebGLRenderer({
        canvas: customize3d,
        alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setSize(ww, wh);
    camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 1000);
    camera.position.set(3,1,3);
    camera.lookAt(0,0,0);
    controls = new OrbitControls( camera, renderer.domElement );
    controls.autoRotate = true;
    controls.enablePan = false;
    controls.maxDistance = 5;
    controls.minDistance = 1;
    controls.target.set(0, 0, 0);

    
    /* const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper ); */
    const planeGeometry = new THREE.PlaneGeometry(60, 60);
    const planeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0,
        metalness: .9,
    });

    const color1 = new THREE.Color( 0xffffff );
    const color2 = new THREE.Color( 0x007ffb );

    spotLight1 = new THREE.SpotLight(color1, 3, 3, .3, 1, 0);
    spotLight1.position.set(3, 5, 3);
    spotLight1.castShadow = true;
    scene.add(spotLight1);
    spotLight2 = new THREE.SpotLight(color1, 3, 3, .3, 1, 0);
    spotLight2.position.set(-3, 5, -3);
    spotLight2.castShadow = true;
    scene.add(spotLight2);

    let light1 = new THREE.AmbientLight(0xffffff, .1);   
    scene.add(light1);


    
    
};
/* ------body------ */
const bodyloader = new GLTFLoader();
const bodyLoader = ( droneUrl, scale, x, y, z ) => {
    if (modelObj) scene.remove( modelObj );
    bodyloader.load(droneUrl, ( gltf ) => {
        modelObj = gltf.scene;
        modelObj.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        
    } , undefined, function ( error ) {
        console.error( error );
    });
    setTimeout(()=> {
        if(modelObj){
            modelObj.position.set(x, y, z);
            modelObj.scale.set(scale, scale, scale);
            scene.add( modelObj );  
        }
        
    }, 500);
};

let bodyType, bodyScale, bodyX, bodyY, bodyZ;

export const body = (e, color) => {
    bodyType = e;
    bodyX = 0;
    bodyY = 0;
    bodyZ = 0;
    if(e===1){
        bodyScale = .6;
    }else if(e===2){
        bodyScale = .23;
    }else{
        bodyScale = .65;
        bodyY = -.3;
    }
    bodyLoader(droneModels[`body0${e}`].color[color], bodyScale, bodyX, bodyY, bodyZ);
};


/* ------propellor------ */
let propellorObj1, propellorObj2, propellorObj3, propellorObj4, propellorScale;
const propellorloader1 = new GLTFLoader();
const propellorLoader1 = ( droneUrl, scale, x, y, z ) => {
    if (propellorObj1) scene.remove( propellorObj1 );
    bodyloader.load(droneUrl, ( gltf ) => {
        propellorObj1 = gltf.scene;
        propellorObj1.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        
    } , undefined, function ( error ) {
        console.error( error );
    });
    setTimeout(()=> {
        if(propellorObj1){
            propellorObj1.position.set(x, y, z);
            propellorObj1.scale.set(scale, scale, scale);
            scene.add( propellorObj1 );  
        }
        
    }, 500);
};
const propellorloader2 = new GLTFLoader();
const propellorLoader2 = ( droneUrl, scale, x, y, z ) => {
    if (propellorObj2) scene.remove( propellorObj2 );
    bodyloader.load(droneUrl, ( gltf ) => {
        propellorObj2 = gltf.scene;
        propellorObj2.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        
    } , undefined, function ( error ) {
        console.error( error );
    });
    setTimeout(()=> {
        if(propellorObj2){
            propellorObj2.position.set(x, y, z);
            propellorObj2.scale.set(scale, scale, scale);
            scene.add( propellorObj2 );  
        }
        
    }, 500);
};
const propellorloader3 = new GLTFLoader();
const propellorLoader3 = ( droneUrl, scale, x, y, z ) => {
    if (propellorObj3) scene.remove( propellorObj3 );
    bodyloader.load(droneUrl, ( gltf ) => {
        propellorObj3 = gltf.scene;
        propellorObj3.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        
    } , undefined, function ( error ) {
        console.error( error );
    });
    setTimeout(()=> {
        if(propellorObj3){
            propellorObj3.position.set(x, y, z);
            propellorObj3.scale.set(scale, scale, scale);
            scene.add( propellorObj3 );  
        }
        
    }, 500);
};
const propellorloader4 = new GLTFLoader();
const propellorLoader4 = ( droneUrl, scale, x, y, z ) => {
    if (propellorObj4) scene.remove( propellorObj4 );
    bodyloader.load(droneUrl, ( gltf ) => {
        propellorObj4 = gltf.scene;
        propellorObj4.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        
    } , undefined, function ( error ) {
        console.error( error );
    });
    setTimeout(()=> {
        if(propellorObj4){
            propellorObj4.position.set(x, y, z);
            propellorObj4.scale.set(scale, scale, scale);
            scene.add( propellorObj4 );  
        }
        
    }, 500);
};

export const propellor = (e, color) => {
    if(e===1){
        propellorScale = .35;
    }else if(e===2){
        propellorScale = .12;
    }else{
        propellorScale = .25;
    }
    if(bodyType===1){
        propellorLoader1(droneModels[`propellor0${e}`].color[color], propellorScale, -.95, .25, .25);
        propellorLoader2(droneModels[`propellor0${e}`].color[color], propellorScale, -.3, .25, .93);
        scene.remove( propellorObj3 );
        scene.remove( propellorObj4 );
    }else if(bodyType===2){
        propellorLoader1(droneModels[`propellor0${e}`].color[color], propellorScale, -.9, .05, .7);
        propellorLoader2(droneModels[`propellor0${e}`].color[color], propellorScale, .9, .05, .7);
        propellorLoader3(droneModels[`propellor0${e}`].color[color], propellorScale, -.85, .03, -1.2);
        propellorLoader4(droneModels[`propellor0${e}`].color[color], propellorScale, .85, .03, -1.2);
    }else if(bodyType===3){
        propellorLoader1(droneModels[`propellor0${e}`].color[color], propellorScale, -.85, .35, .88);
        propellorLoader2(droneModels[`propellor0${e}`].color[color], propellorScale, .87, .35, .91);
        propellorLoader3(droneModels[`propellor0${e}`].color[color], propellorScale, -.88, .35, -.61);
        propellorLoader4(droneModels[`propellor0${e}`].color[color], propellorScale, 1, .35, -.69);
    }
};

export const removeBody = () => {
    if (modelObj) scene.remove( modelObj );
};

export const removePropellor = () =>{
    if(propellorObj1)scene.remove( propellorObj1 );
    if(propellorObj2)scene.remove( propellorObj2 );
    if(propellorObj3)scene.remove( propellorObj3 );
    if(propellorObj4)scene.remove( propellorObj4 );
};

export const removeAll = () => {
    if (modelObj) scene.remove( modelObj );
    if(propellorObj1)scene.remove( propellorObj1 );
    if(propellorObj2)scene.remove( propellorObj2 );
    if(propellorObj3)scene.remove( propellorObj3 );
    if(propellorObj4)scene.remove( propellorObj4 );
};
export function animation () {
    requestAnimationFrame(animation);
    render();
    camera.updateWorldMatrix();
    camera.updateProjectionMatrix();
    windowResize();
    controls.update();
};

function render () {
    renderer.render(scene, camera);
};

function windowResize () {
    window.addEventListener('resize', function() {
        let ww = customize3d.width, wh = customize3d.height;
        camera.aspect = ww / wh;
        renderer.setSize(ww, wh);
    });
};


