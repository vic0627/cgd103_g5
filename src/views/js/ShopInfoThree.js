/* import { onMounted } from 'vue'; */
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import { DotScreenShader } from 'three/examples/jsm/shaders/DotScreenShader';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import droneUrl from '@/assets/model3d/flying_drone/flying_drone.glb';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export let scene, renderer, camera, mixer, actionExplode, actionHover, actionStep, modelObj, pointLight, spotLight1, spotLight2, Rain;

export let clipHover, clipExplode, clipStep;

let composer, glitchPass, afterimagePass;



let ww = window.innerWidth, wh = window.innerHeight;


export function sceneInit () {
    const product3d = document.querySelector('#product3d');

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( scene.background, 1, 1000 );
    renderer = new THREE.WebGLRenderer({
        canvas: product3d,
        alpha: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize(ww, wh);
    camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 1000);
    camera.position.set(0,1,3);
    camera.lookAt(0,0,0)
    const planeGeometry = new THREE.PlaneGeometry(60, 60);
    const planeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0,
        metalness: .9,
    });
    /* const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper ); */
    const color1 = new THREE.Color( 0xffffff );
    const color2 = new THREE.Color( 0x007ffb );

    spotLight1 = new THREE.SpotLight(color1, 5, 100, .3, 1, 0);
    spotLight1.position.set(5, 5, 5);
    scene.add(spotLight1);
    spotLight2 = new THREE.SpotLight(color1, 3, 100, Math.PI/2, 0, 0);
    spotLight2.position.set(-5, 5, -5);
    scene.add(spotLight2);
    pointLight = new THREE.PointLight( 0xDC9E7A, 0, 2, 2 ); 
    pointLight.position.set(0,1,3);
    scene.add( pointLight );

    const vertices = [];
    for ( let i = 0; i < 1000; i ++ ) {
            const x = THREE.MathUtils.randFloatSpread( 5 );
            const y = THREE.MathUtils.randFloatSpread( 5 );
            const z = THREE.MathUtils.randFloatSpread( 5 );
            vertices.push( x, y, z );
        }
    const rain = new THREE.BufferGeometry();
    rain.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
    const rainT = new THREE.PointsMaterial( { 
        color: 0xc0c0c0,
        size: .01,
    } );
    Rain = new THREE.Points( rain, rainT );
    scene.add( Rain );

    composer = new EffectComposer( renderer );
	composer.addPass( new RenderPass( scene, camera ) );

	glitchPass = new GlitchPass(32);
    glitchPass.goWild = true;
    glitchPass.curF = .5;

    /* const effect1 = new ShaderPass( DotScreenShader );
	effect1.uniforms[ 'scale' ].value = 4;
    effect1.uniforms[ 'angle' ].value = Math.PI;
	composer.addPass( effect1 );

	const effect2 = new ShaderPass( RGBShiftShader );
	effect2.uniforms[ 'amount' ].value = .1;
	effect2.uniforms[ 'tDiffuse' ].value = .1;
	composer.addPass( effect2 ); */
    /* ------模型導入------ */
    
    const loader = new GLTFLoader();
    loader.load(droneUrl, function ( gltf ) {
        modelObj = gltf.scene;
        modelObj.position.set(0, -.5, 0);
        modelObj.scale.set(1, 1, 1);
        mixer = new THREE.AnimationMixer(modelObj);
        const clips = gltf.animations;
        clipHover = THREE.AnimationClip.findByName(clips, 'hover');
        clipExplode = THREE.AnimationClip.findByName(clips, 'exploded_view');
        clipStep = THREE.AnimationClip.findByName(clips, 'step_by_step');
        actionExplode = mixer.clipAction(clipExplode);
        actionHover = mixer.clipAction(clipHover);
        actionStep = mixer.clipAction(clipStep);
        actionHover.timeScale = 1.5;
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

export const glitchTrigger = () => {
    composer.addPass( glitchPass );
    setTimeout(() => {
        composer.removePass( glitchPass );
        composer.dispose( glitchPass );
    }, 500)
};


const clock = new THREE.Clock();

export function animation () {
    requestAnimationFrame(animation);
    render();
    composer.render();
    camera.updateWorldMatrix();
    camera.updateProjectionMatrix();
    windowResize();
    if (mixer) mixer.update(clock.getDelta());
};

function render () {
    renderer.render(scene, camera);
};

function windowResize () {
    window.addEventListener('resize', function() {
        ww = window.innerWidth;
        wh = window.innerHeight;
        camera.aspect = ww / wh;
        renderer.setSize(ww, wh);
    });
};



