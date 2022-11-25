import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import gsap from 'gsap';
import droneUrl from '@/assets/model3d/flying_drone/flying_drone.glb';

const ww = window.innerWidth;
const wh = window.innerHeight;

export let land3d, scene, renderer, camera, mixer, action, modelObj, directionalLight, spotLight1, spotLight2;

export function sceneInit () {
    land3d = document.querySelector('#land3d');
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( scene.background, 1, 1000 );
    renderer = new THREE.WebGLRenderer({
        canvas: land3d,
        antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setSize(ww, wh);
    renderer.setSize(ww, wh);
    camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 1000);
    camera.position.set(0,.01,10);
    const planeGeometry = new THREE.PlaneGeometry(60, 60);
    const planeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0,
        metalness: .9,
    });
    let plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, -.5, 0);
    plane.castShadow = true;
    plane.receiveShadow = true;
    scene.add(plane);

    const color1 = new THREE.Color( 0xffffff );
    const color2 = new THREE.Color( 0x007ffb );

    spotLight1 = new THREE.SpotLight(color1, 0, 10, .3, 1, 0);
    spotLight1.position.set(0, 15, 0);
    spotLight1.castShadow = true;
    spotLight1.shadow.focus = 1;
    if (modelObj) spotLight1.target = modelObj;
    scene.add(spotLight1);

    spotLight2 = new THREE.SpotLight(color2, 1, 10, .1, 1, 0);
    spotLight2.position.set(0, 15, 0);
    spotLight2.castShadow = true;
    spotLight2.shadow.focus = 1;
    if (modelObj) spotLight2.target = modelObj;
    scene.add(spotLight2);

    let light1 = new THREE.AmbientLight(0xffffff, .1);   
    scene.add(light1);

    directionalLight = new THREE.DirectionalLight( 0xeeaa66, 0.5 );
    directionalLight.position.set(0,.5,1.2);
    scene.add( directionalLight );

    /* ------模型導入------ */
    const loader = new GLTFLoader();
    loader.load(droneUrl, function ( gltf ) {
        modelObj = gltf.scene;
        modelObj.position.set(0, 0, 0); // 模型位置座標
        modelObj.scale.set(1, 1, 1); // 模型大小縮放 (預設1, 1, 1)
        mixer = new THREE.AnimationMixer(modelObj);
        const clips = gltf.animations;
        const clip = THREE.AnimationClip.findByName(clips, 'exploded_view');
        action = mixer.clipAction(clip);
        action.play();
        action.paused = true;
        
        modelObj.traverse(function(node) {
            if (node.isMesh) {
                node.material.roughness = 1
                node.material.metalness = 0
                node.material.transparent = false
                node.castShadow = true
                node.receiveShadow = true
            }
        })
        scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });
    /* -------------------- */
    
};

export function modelAni () {
    if (action) {
        action.paused = false;
        action.play();
        setTimeout(()=>{
            action.paused = true;
        }, 3230);
    };
};

const clock = new THREE.Clock();

export function animation () {
    requestAnimationFrame(animation);
    render();
    camera.updateWorldMatrix();
    camera.updateProjectionMatrix();
    if (mixer) mixer.update(clock.getDelta());
};

export function render () {
    renderer.render(scene, camera);
};

export function windowResize () {
    window.addEventListener('resize', function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

export function toBack() {
    gsap.to(camera.position, {
        x: 0,
        y: 1.5,
        z: 1.5,
        duration: 3,
    });
    gsap.to(camera.rotation, {
        x: Math.PI/-7,
        y: 0,
        z: 0,
        duration: 3,
    });
    gsap.to(camera, {
        fov: 120,
        duration: 3,
    })
    gsap.to(spotLight1, {
        intensity: 3,
        duration: 3,
    })
    gsap.to(spotLight2, {
        intensity: 0,
        duration: 3,
    })
    gsap.to('#frontButtons', {
        opacity: 0,
        duration: .5,
    })
    gsap.to('#frontButtons', {
        display: 'none',
        duration: 0,
        delay: .5,
    })
    gsap.to('#backButtons', {
        opacity: 1,
        duration: .5,
        delay: 3
    })
    gsap.to('#backButtons', {
        display: 'flex',
        duration: 0,
        delay: 3,
    })
    gsap.to('#frontTitle', {
        opacity: 0,
        duration: .5,
    })
    gsap.to('#frontTitle', {
        display: 'none',
        duration: 0,
        delay: .5,
    })
    gsap.to('#backTitle', {
        display: 'block',
        duration: 0,
        delay: 2.5,
    })
    gsap.to('#backTitle', {
        opacity: 1,
        duration: .5,
        delay: 2.5
    })
    gsap.to(directionalLight, {
        intensity: 0,
        duration: 3,
    })
    modelAni();
};

export function toFront() {
    gsap.to(camera.position, {
        x: 0,
        y: .5,
        z: 1.2,
        duration: 3,
    });
    gsap.to(camera.rotation, {
        x: 0,
        y: Math.PI/-10,
        z: 0,
        duration: 3,
    });
    gsap.to(camera, {
        fov: 60,
        duration: 3,
    })
    gsap.to(spotLight1, {
        intensity: 0,
        duration: 3,
    })
    gsap.to(spotLight2, {
        intensity: 1,
        duration: 3,
    })
    gsap.to('#backButtons', {
        opacity: 0,
        duration: .5,
    })
    gsap.to('#backButtons', {
        display: 'none',
        duration: 0,
        delay: .5,
    })
    gsap.to('#frontButtons', {
        opacity: 1,
        duration: .5,
        delay: 3
    })
    gsap.to('#frontButtons', {
        display: 'flex',
        duration: 0,
        delay: 3,
    })
    gsap.to('#backTitle', {
        opacity: 0,
        duration: .5,
    })
    gsap.to('#backTitle', {
        display: 'none',
        duration: 0,
        delay: .5,
    })
    gsap.to('#frontTitle', {
        display: 'block',
        duration: 0,
        delay: 2.5,
    })
    gsap.to('#frontTitle', {
        opacity: 1,
        duration: .5,
        delay: 2.5
    })
    gsap.to(directionalLight, {
        intensity: .5,
        duration: 3,
    })
    modelAni();
};