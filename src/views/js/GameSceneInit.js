import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import gsap from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { log, $$, $all } from '@/composables/useCommon.js';
import { sceneInit } from './ShopInfoThree';

const ww = window.innerWidth, wh = window.innerHeight;

let scene, renderer, camera;

let world, playerSolid;

const seneInit = () => {
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog( scene.background, 3500, 15000 );
    renderer = new THREE.WebGLRenderer({
        canvas: $$("#model"),
        antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.setSize(ww, wh);
    camera = new THREE.PerspectiveCamera(60, ww / wh, 0.001, 1000);
    world = new CANNON.World({
        gravity: new CANNON.Vec3(0, -9.81, 0),
    });
    world.broadphase = new CANNON.NaiveBroadphase();


    playerSolid = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Sphere(1),
        position: new CANNON.Vec3(0, 1, 0),
        linearDamping: .9,
    })
    world.addBody(playerSolid);
    const playerMesh = new THREE.Object3D();
}
sceneInit();

let health = 100;
const fatal = gsap.timeline({repeat:-1});
const hurt = gsap.timeline();

const collide = () => {
    playerSolid.addEventListener('collide', function(){
        let playerV = Math.sqrt(Math.pow(playerSolid.velocity.x, 2)+Math.pow(playerSolid.velocity.y, 2)+Math.pow(playerSolid.velocity.z, 2));
        /* if($$('#gameUI').style.background==``){
            hurt.to($$('#gameUI'), {
                background: `radial-gradient(#0000 30%, #f006)`,
                duration: .2,
            })
            hurt.to($$('#gameUI'), {
                background: ``,
                duration: 1,
            })
        } */
        if(playerV>40){
            health -= playerV/10
            let demage = parseInt(health);
            if(demage>0){
                gsap.to(document.getElementById('healthCount'), {
                    innerHTML: demage,
                    duration: .5,
                })
            }else{
                document.getElementById('healthCount').innerHTML=0
            }
            if(demage<50 && demage>30){
                document.getElementById('healthCount').classList.add('healthAlert')
            }else if(demage<30 && demage>0){
                document.getElementById('gameUI').style.background=`radial-gradient(#0000 70%, #f006)`;
                fatal.to(document.getElementById('gameUI'), {
                    background: `radial-gradient(#0000 30%, #f006)`,
                    duration: .5,
                })
                fatal.to(document.getElementById('gameUI'), {
                    background: `radial-gradient(#0000 70%, #f006)`,
                    duration: .5,
                })
            }
        }
    })
}
collide();


const playerV = () => parseInt(Math.sqrt(Math.pow(playerSolid.velocity.x, 2)+Math.pow(playerSolid.velocity.y, 2)+Math.pow(playerSolid.velocity.z, 2)));

// 儀表
const speedUpdate = () => {
    $$('#speed').innerHTML=playerV();
}
// 鋼體、圖形組合函式
const combineWorld = (mesh, solid) => {
    mesh.position.copy(solid.position);
    mesh.quaternion.copy(solid.quaternion);
}
const combinition = () => {
    combineWorld(stageCMovObj9mesh,stageCMovObj9);
    combineWorld(stageCMovObj8mesh,stageCMovObj8);
    combineWorld(stageCMovObj7mesh,stageCMovObj7);
    combineWorld(stageCMovObj6mesh,stageCMovObj6);
    combineWorld(stageCMovObj5mesh,stageCMovObj5);
    combineWorld(stageCMovObj4mesh,stageCMovObj4);
    combineWorld(stageCMovObj3mesh,stageCMovObj3);
    combineWorld(stageCMovObj2mesh,stageCMovObj2);
    combineWorld(stageCMovObj1mesh,stageCMovObj1);
    combineWorld(sphereMesh, sphereSolid)
    combineWorld(sphereMeshR1, sphereSolidR1)
    combineWorld(sphereMeshR2, sphereSolidR2)
    combineWorld(sphereMeshR3, sphereSolidR3)
    combineWorld(sphereMeshR4, sphereSolidR4)
    combineWorld(sphereMeshL1, sphereSolidL1)
    combineWorld(sphereMeshL2, sphereSolidL2)
    combineWorld(sphereMeshL3, sphereSolidL3)
    combineWorld(sphereMeshL4, sphereSolidL4)
    pointLight.position.copy(playerSolid.position);
}
// 物件距離偵測
const distance = (p1, p2) =>  p1.position.distanceTo(p2.position);

// 模型lookAt調整
const look = () => {
    let b = camera.getWorldDirection(camera.position);
    let x;
    let y;
    let z;
    if(b.x>-.5){
        x = b.x;
    }else{
        x=-.5;
    }
    if(b.y>-.5&&b.y<.5){
        y=b.y;
    }else if(b.y<-.5){
        y=-.5;
    }else{
        y=.5;
    }
    if(b.z>-.5){
        z=b.z;
    }else{
        z=-.5;
    }
    return new THREE.Vector3(x,y,z)
}
// 方位
const direction = () => {
    let b = camera.getWorldDirection(camera.position);
    return Math.atan2(b.x,b.z)*(180/Math.PI) //旋轉角
}
window.addEventListener('mousemove', () => {
    gsap.to($$('#direction'), {
        rotate: direction()+'deg',
    })
})

const timeStep = 1.0 / 60.0;
let time = Date.now();
const clock = new THREE.Clock();

const animation = () => {
    camera.position.copy(playerSolid.position)
    world.step(timeStep);
    //cannonDebugger.update();  // 鋼體 wireframe
    combinition();
    sphereFall();
    if (modelObj) {
        modelObj.position.set(look().x*5+playerSolid.position.x,look().y+playerSolid.position.y,look().z*5+playerSolid.position.z);
        modelObj.lookAt(look().x*30+playerSolid.position.x,look().y*30+playerSolid.position.y,look().z*30+playerSolid.position.z);
    }
    
    requestAnimationFrame(animation);
    render();
    controls.update(Date.now() - time);
    time = Date.now();
    speedUpdate();
    stageHint();
}

function render() {
    renderer.render(scene, camera);
    camera.updateProjectionMatrix();
}

window.addEventListener('resize', function() {
    camera.aspect = ww / wh;
    camera.updateProjectionMatrix();
    renderer.setSize(ww, wh);
})
animation()