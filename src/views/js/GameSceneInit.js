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


    const concreteT = new THREE.TextureLoader().load( './texture/concrete.jpg' );
    const boxM = new THREE.MeshLambertMaterial({ 
        map: concreteT,
        color: 0x666666,
    });
    const floorM = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: .5,
        roughness: 0,
    })
    // 初始平台
    const startCeilingSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 20)),
        position: new CANNON.Vec3(0, 0, -10),
    })
    world.addBody(startCeilingSolid);
    const box10_1_20 = new THREE.BoxGeometry(20,2,40);
    const box10_1_20_mesh = new THREE.Mesh(box10_1_20,floorM);
    combineWorld(box10_1_20_mesh, startCeilingSolid)
    scene.add(box10_1_20_mesh);
    // 初始天花板
    const boxSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 11)),
        position: new CANNON.Vec3(0, 20, 0),
    })
    world.addBody(boxSolid);
    const box10_1_11 = new THREE.BoxGeometry(20,2,22);
    const box10_1_11_mesh = new THREE.Mesh(box10_1_11,boxM);
    combineWorld(box10_1_11_mesh, boxSolid)
    scene.add(box10_1_11_mesh);
    // 初始後牆
    const startZWallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(0, 10, 10),
    })
    world.addBody(startZWallSolid);
    const box10_10_1 = new THREE.BoxGeometry(20,20,2);
    const box10_10_1_mesh = new THREE.Mesh(box10_10_1,boxM);
    combineWorld(box10_10_1_mesh,startZWallSolid);
    scene.add(box10_10_1_mesh);
    // 初始右牆
    const startXWallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 20)),
        position: new CANNON.Vec3(10, 10, -10),
    })
    world.addBody(startXWallSolid);
    const box1_10_20 = new THREE.BoxGeometry(2,20,40);
    const box1_10_20_mesh = new THREE.Mesh(box1_10_20,boxM);
    combineWorld(box1_10_20_mesh,startXWallSolid);
    scene.add(box1_10_20_mesh);
    // 初始左牆
    const startX_WallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 20)),
        position: new CANNON.Vec3(-10, 10, -10),
    })
    world.addBody(startX_WallSolid);
    const box1_10_20_mesh2 = box1_10_20_mesh.clone();
    combineWorld(box1_10_20_mesh2,startX_WallSolid);
    scene.add(box1_10_20_mesh2);
    // 通道1後牆
    const startTubeZWallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 40, 1)),
        position: new CANNON.Vec3(0, 60, -10),
    })
    world.addBody(startTubeZWallSolid);
    const box10_40_1 = new THREE.BoxGeometry(20,80,2);
    const box10_40_1_mesh = new THREE.Mesh(box10_40_1,boxM);
    combineWorld(box10_40_1_mesh,startTubeZWallSolid);
    scene.add(box10_40_1_mesh);
    // 通道1右牆
    const startTubeXWallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 40, 10)),
        position: new CANNON.Vec3(10, 60, -20),
    })
    world.addBody(startTubeXWallSolid);
    const box1_40_10 = new THREE.BoxGeometry(2,80,20);
    const box1_40_10_mesh = new THREE.Mesh(box1_40_10,boxM);
    combineWorld(box1_40_10_mesh,startTubeXWallSolid);
    scene.add(box1_40_10_mesh);
    // 通道1左牆
    const startTubeX_WallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 40, 10)),
        position: new CANNON.Vec3(-10, 60, -20),
    })
    world.addBody(startTubeX_WallSolid);
    const box1_40_10_mesh2 = box1_40_10_mesh.clone();
    combineWorld(box1_40_10_mesh2,startTubeX_WallSolid);
    scene.add(box1_40_10_mesh2);
    // 通道1前牆
    const startTubeZ_WallSolid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 40, 1)),
        position: new CANNON.Vec3(0, 40, -30),
    })
    world.addBody(startTubeZ_WallSolid);
    const box10_40_1_mesh2 = box10_40_1_mesh.clone();
    combineWorld(box10_40_1_mesh2,startTubeZ_WallSolid);
    scene.add(box10_40_1_mesh2);
    // 通道1天花板
    const startTubeCeiling = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 60)),
        position: new CANNON.Vec3(0, 100, -70),
    })
    world.addBody(startTubeCeiling);
    const box10_1_60 = new THREE.BoxGeometry(20,2,120);
    const box10_1_60_mesh = new THREE.Mesh(box10_1_60,boxM);
    combineWorld(box10_1_60_mesh,startTubeCeiling);
    scene.add(box10_1_60_mesh);
    // 通道1地板_上面
    const startTubeFloor = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 40)),
        position: new CANNON.Vec3(0, 79, -70),
    })
    world.addBody(startTubeFloor);
    const box10_1_40 = new THREE.BoxGeometry(20,2,80);
    const box10_1_40_mesh = new THREE.Mesh(box10_1_40,floorM);
    combineWorld(box10_1_40_mesh,startTubeFloor);
    scene.add(box10_1_40_mesh);
    // 通道1右牆_上面
    const startTubeWallRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 50)),
        position: new CANNON.Vec3(10, 90, -80),
    })
    world.addBody(startTubeWallRight);
    const box1_10_50 = new THREE.BoxGeometry(2,20,100);
    const box1_10_50_mesh = new THREE.Mesh(box1_10_50,boxM);
    combineWorld(box1_10_50_mesh,startTubeWallRight);
    scene.add(box1_10_50_mesh);
    // 通道1左牆_上面
    const startTubeWallLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 50)),
        position: new CANNON.Vec3(-10, 90, -80),
    })
    world.addBody(startTubeWallLeft);
    const box1_10_50_mesh2 = box1_10_50_mesh.clone();
    combineWorld(box1_10_50_mesh2,startTubeWallLeft);
    scene.add(box1_10_50_mesh2);
    // 通道1後牆_往下
    const startTubeWallDown = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 40, 1)),
        position: new CANNON.Vec3(0, 40, -110),
    })
    world.addBody(startTubeWallDown);
    const box10_40_1_mesh3 = box10_40_1_mesh.clone();
    combineWorld(box10_40_1_mesh3,startTubeWallDown);
    scene.add(box10_40_1_mesh3);
    // 通道1前牆_往下
    const startTubeWallDownFront = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 50, 1)),
        position: new CANNON.Vec3(0, 50, -130),
    })
    world.addBody(startTubeWallDownFront);
    const box10_50_1 = new THREE.BoxGeometry(20,100,2);
    const box10_50_1_mesh = new THREE.Mesh(box10_50_1,boxM);
    combineWorld(box10_50_1_mesh,startTubeWallDownFront);
    scene.add(box10_50_1_mesh);
    // 通道1左牆_往下
    const startTubeWallDownLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 40, 10)),
        position: new CANNON.Vec3(-10, 40, -120),
    })
    world.addBody(startTubeWallDownLeft);
    const box1_40_10_mesh3 = box1_40_10_mesh.clone();
    combineWorld(box1_40_10_mesh3,startTubeWallDownLeft);
    scene.add(box1_40_10_mesh3);
    // 通道1右牆_往下
    const startTubeWallDownRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 30, 10)),
        position: new CANNON.Vec3(10, 50, -120),
    })
    world.addBody(startTubeWallDownRight);
    const box1_30_10 = new THREE.BoxGeometry(2,60,20);
    const box1_30_10_mesh = new THREE.Mesh(box1_30_10,boxM);
    combineWorld(box1_30_10_mesh,startTubeWallDownRight);
    scene.add(box1_30_10_mesh);
    // 通道1地板_下
    const startTubeFloorDown = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(60, 1, 10)),
        position: new CANNON.Vec3(50, 0, -120),
    })
    world.addBody(startTubeFloorDown);
    const box60_1_10 = new THREE.BoxGeometry(120,2,20);
    const box60_1_10_mesh = new THREE.Mesh(box60_1_10,floorM);
    combineWorld(box60_1_10_mesh,startTubeFloorDown);
    scene.add(box60_1_10_mesh);
    // 通道1天花板_下
    const startTubeCeilingDown = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(51, 1, 10)),
        position: new CANNON.Vec3(60, 20, -120),
    })
    world.addBody(startTubeCeilingDown);
    const box51_1_10 = new THREE.BoxGeometry(102,2,20);
    const box51_1_10_mesh = new THREE.Mesh(box51_1_10,boxM);
    combineWorld(box51_1_10_mesh,startTubeCeilingDown);
    scene.add(box51_1_10_mesh);
    // 通道1左牆_下
    const startTubeWallLeftDown = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(50, 10, 1)),
        position: new CANNON.Vec3(60, 10, -130),
    })
    world.addBody(startTubeWallLeftDown);
    const box50_10_1 = new THREE.BoxGeometry(100,20,2);
    const box50_10_1_mesh = new THREE.Mesh(box50_10_1,boxM);
    combineWorld(box50_10_1_mesh,startTubeWallLeftDown);
    scene.add(box50_10_1_mesh);
    // 通道1右牆_下
    const startTubeWallRightDown = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(40, 10, 1)),
        position: new CANNON.Vec3(50, 10, -110),
    })
    world.addBody(startTubeWallRightDown);
    const box40_10_1 = new THREE.BoxGeometry(80,20,2);
    const box40_10_1_mesh = new THREE.Mesh(box40_10_1,boxM);
    combineWorld(box40_10_1_mesh,startTubeWallRightDown);
    scene.add(box40_10_1_mesh);
    // 通道1地板_出口
    const startTubeFloorExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 60)),
        position: new CANNON.Vec3(100, 0, -50),
    })
    world.addBody(startTubeFloorExit);
    const box10_1_60_mesh2 = new THREE.Mesh(box10_1_60,floorM);
    combineWorld(box10_1_60_mesh2,startTubeFloorExit);
    scene.add(box10_1_60_mesh2);
    // 通道1天花板_出口
    const startTubeCeilingExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 60)),
        position: new CANNON.Vec3(100, 20, -50),
    })
    world.addBody(startTubeCeilingExit);
    const box10_1_60_mesh3 = box10_1_60_mesh.clone();
    combineWorld(box10_1_60_mesh3,startTubeCeilingExit);
    scene.add(box10_1_60_mesh3);
    // 通道1左牆_出口
    const startTubeWallLeftExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 70)),
        position: new CANNON.Vec3(110, 10, -60),
    })
    world.addBody(startTubeWallLeftExit);
    const box1_10_70 = new THREE.BoxGeometry(2,20,140);
    const box1_10_70_mesh = new THREE.Mesh(box1_10_70,boxM);
    combineWorld(box1_10_70_mesh,startTubeWallLeftExit);
    scene.add(box1_10_70_mesh);
    // 通道1右牆_出口
    const startTubeWallRightExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 60)),
        position: new CANNON.Vec3(90, 10, -50),
    })
    world.addBody(startTubeWallRightExit);
    const box1_10_60 = new THREE.BoxGeometry(2,20,120);
    const box1_10_60_mesh = new THREE.Mesh(box1_10_60,boxM);
    combineWorld(box1_10_60_mesh,startTubeWallRightExit);
    scene.add(box1_10_60_mesh);
    // 關卡A第1層
    const stageAFloor = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 150)),
        position: new CANNON.Vec3(200, 0, 160),
    })
    world.addBody(stageAFloor);
    const box150_1_150 = new THREE.BoxGeometry(300,2,300);
    const box150_1_150_mesh = new THREE.Mesh(box150_1_150,floorM);
    combineWorld(box150_1_150_mesh,stageAFloor);
    scene.add(box150_1_150_mesh);
    // 關卡A第2層_大
    const stageAFloor2Big = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 130)),
        position: new CANNON.Vec3(200, 40, 140),
    })
    world.addBody(stageAFloor2Big);
    const box150_1_130 = new THREE.BoxGeometry(300,2,260);
    const box150_1_130_mesh = new THREE.Mesh(box150_1_130,floorM);
    combineWorld(box150_1_130_mesh,stageAFloor2Big);
    scene.add(box150_1_130_mesh);
    // 關卡A第2層_小
    const stageAFloor2Small = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(130, 1, 20)),
        position: new CANNON.Vec3(180, 40, 290),
    })
    world.addBody(stageAFloor2Small);
    const box130_1_20 = new THREE.BoxGeometry(260,2,40);
    const box130_1_20_mesh = new THREE.Mesh(box130_1_20,floorM);
    combineWorld(box130_1_20_mesh,stageAFloor2Small);
    scene.add(box130_1_20_mesh);
    // 關卡A第3層_大
    const stageAFloor3Big = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 130)),
        position: new CANNON.Vec3(200, 80, 180),
    })
    world.addBody(stageAFloor3Big);
    const box150_1_130_mesh2 = box150_1_130_mesh.clone();
    combineWorld(box150_1_130_mesh2,stageAFloor3Big);
    scene.add(box150_1_130_mesh2);
    // 關卡A第3層_小
    const stageAFloor3Small = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(130, 1, 20)),
        position: new CANNON.Vec3(220, 80, 30),
    })
    world.addBody(stageAFloor3Small);
    const box130_1_20_mesh2 = box130_1_20_mesh.clone();
    combineWorld(box130_1_20_mesh2,stageAFloor3Small);
    scene.add(box130_1_20_mesh2);
    // 關卡A天花板
    const stageACeiling = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 150)),
        position: new CANNON.Vec3(200, 120, 160),
    })
    world.addBody(stageACeiling);
    const box150_1_150_mesh2 = box150_1_150_mesh.clone();
    combineWorld(box150_1_150_mesh2,stageACeiling);
    scene.add(box150_1_150_mesh2);
    // 關卡A右牆
    const stageAWallRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 60, 150)),
        position: new CANNON.Vec3(50, 60, 160),
    })
    world.addBody(stageAWallRight);
    const box1_60_150 = new THREE.BoxGeometry(2,120,300);
    const box1_60_150_mesh = new THREE.Mesh(box1_60_150,boxM);
    combineWorld(box1_60_150_mesh,stageAWallRight);
    scene.add(box1_60_150_mesh);
    // 關卡A左牆
    const stageAWallLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 60, 150)),
        position: new CANNON.Vec3(350, 60, 160),
    })
    world.addBody(stageAWallLeft);
    const box1_60_150_mesh2 = box1_60_150_mesh.clone();
    combineWorld(box1_60_150_mesh2,stageAWallLeft);
    scene.add(box1_60_150_mesh2);
    // 關卡A後牆_大
    const stageAWallBehindBig = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(120, 60, 1)),
        position: new CANNON.Vec3(230, 60, 10),
    })
    world.addBody(stageAWallBehindBig);
    const box120_60_1 = new THREE.BoxGeometry(240,120,2);
    const box120_60_1_mesh = new THREE.Mesh(box120_60_1,boxM);
    combineWorld(box120_60_1_mesh,stageAWallBehindBig);
    scene.add(box120_60_1_mesh);
    // 關卡A後牆_中
    const stageAWallBehindMid = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(20, 60, 1)),
        position: new CANNON.Vec3(70, 60, 10),
    })
    world.addBody(stageAWallBehindMid);
    const box20_60_1 = new THREE.BoxGeometry(40,120,2);
    const box20_60_1_mesh = new THREE.Mesh(box20_60_1,boxM);
    combineWorld(box20_60_1_mesh,stageAWallBehindMid);
    scene.add(box20_60_1_mesh);
    // 關卡A後牆_小
    const stageAWallBehindSmall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 50, 1)),
        position: new CANNON.Vec3(100, 70, 10),
    })
    world.addBody(stageAWallBehindSmall);
    const box10_50_1_mesh2 = box10_50_1_mesh.clone();
    combineWorld(box10_50_1_mesh2,stageAWallBehindSmall);
    scene.add(box10_50_1_mesh2);
    // 關卡A前牆
    const stageAWallFront = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 40, 1)),
        position: new CANNON.Vec3(200, 40, 310),
    })
    world.addBody(stageAWallFront);
    const box150_40_1 = new THREE.BoxGeometry(300,80,2);
    const box150_40_1_mesh = new THREE.Mesh(box150_40_1,boxM);
    combineWorld(box150_40_1_mesh,stageAWallFront);
    scene.add(box150_40_1_mesh);
    // 關卡A1障礙1
    const stageA1Obj1 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(100, 60, 150),
    })
    world.addBody(stageA1Obj1);
    const box10_60_10 = new THREE.BoxGeometry(20,120,20);
    const box10_60_10_mesh = new THREE.Mesh(box10_60_10,boxM);
    combineWorld(box10_60_10_mesh,stageA1Obj1);
    scene.add(box10_60_10_mesh);
    // 關卡A1障礙2
    const stageA1Obj2 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(100, 60, 60),
    })
    world.addBody(stageA1Obj2);
    const box10_60_10_mesh2 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh2,stageA1Obj2);
    scene.add(box10_60_10_mesh2);
    // 關卡A1障礙3
    const stageA1Obj3 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(100, 60, 240),
    })
    world.addBody(stageA1Obj3);
    const box10_60_10_mesh3 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh3,stageA1Obj3);
    scene.add(box10_60_10_mesh3);
    // 關卡A1障礙4
    const stageA1Obj4 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(170, 60, 150),
    })
    world.addBody(stageA1Obj4);
    const box10_60_10_mesh4 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh4,stageA1Obj4);
    scene.add(box10_60_10_mesh4);
    // 關卡A1障礙5
    const stageA1Obj5 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(170, 60, 60),
    })
    world.addBody(stageA1Obj5);
    const box10_60_10_mesh5 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh5,stageA1Obj5);
    scene.add(box10_60_10_mesh5);
    // 關卡A1障礙6
    const stageA1Obj6 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(170, 60, 240),
    })
    world.addBody(stageA1Obj6);
    const box10_60_10_mesh6 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh6,stageA1Obj6);
    scene.add(box10_60_10_mesh6);
    // 關卡A1障礙7
    const stageA1Obj7 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(240, 60, 150),
    })
    world.addBody(stageA1Obj7);
    const box10_60_10_mesh7 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh7,stageA1Obj7);
    scene.add(box10_60_10_mesh7);
    // 關卡A1障礙7
    const stageA1Obj8 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(240, 60, 60),
    })
    world.addBody(stageA1Obj8);
    const box10_60_10_mesh8 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh8,stageA1Obj8);
    scene.add(box10_60_10_mesh8);
    // 關卡A1障礙9
    const stageA1Obj9 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(240, 60, 240),
    })
    world.addBody(stageA1Obj9);
    const box10_60_10_mesh9 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh9,stageA1Obj9);
    scene.add(box10_60_10_mesh9);
    // 關卡A1障礙10
    const stageA1Obj10 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(300, 60, 150),
    })
    world.addBody(stageA1Obj10);
    const box10_60_10_mesh10 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh10,stageA1Obj10);
    scene.add(box10_60_10_mesh10);
    // 關卡A1障礙11
    const stageA1Obj11 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(300, 60, 60),
    })
    world.addBody(stageA1Obj11);
    const box10_60_10_mesh11 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh11,stageA1Obj11);
    scene.add(box10_60_10_mesh11);
    // 關卡A1障礙12
    const stageA1Obj12 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 60, 10)),
        position: new CANNON.Vec3(300, 60, 240),
    })
    world.addBody(stageA1Obj12);
    const box10_60_10_mesh12 = box10_60_10_mesh.clone();
    combineWorld(box10_60_10_mesh12,stageA1Obj12);
    scene.add(box10_60_10_mesh12);

    // 關卡B地板
    const stageBFloor = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 150, 1)),
        position: new CANNON.Vec3(200, 163, 435),
    })
    stageBFloor.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/3.2);
    world.addBody(stageBFloor);
    const box150_150_1 = new THREE.BoxGeometry(300,300,2);
    const box150_150_1_mesh = new THREE.Mesh(box150_150_1,floorM);
    combineWorld(box150_150_1_mesh,stageBFloor);
    scene.add(box150_150_1_mesh);
    // 關卡B天花板
    const stageBCeiling = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 130, 1)),
        position: new CANNON.Vec3(200, 192, 417),
    })
    stageBCeiling.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/3.2);
    world.addBody(stageBCeiling);
    const box150_130_1 = new THREE.BoxGeometry(300,260,2);
    const box150_130_1_mesh = new THREE.Mesh(box150_130_1,boxM);
    combineWorld(box150_130_1_mesh,stageBCeiling);
    scene.add(box150_130_1_mesh);
    // 關卡B右牆
    const stageBWallRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 180, 18)),
        position: new CANNON.Vec3(50, 171, 417),
    })
    stageBWallRight.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/3.2);
    world.addBody(stageBWallRight);
    const box1_180_18 = new THREE.BoxGeometry(2,360,36);
    const box1_180_18_mesh = new THREE.Mesh(box1_180_18,boxM);
    combineWorld(box1_180_18_mesh,stageBWallRight);
    scene.add(box1_180_18_mesh);
    // 關卡B左牆
    const stageBWallLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 180, 18)),
        position: new CANNON.Vec3(350, 171, 417),
    })
    stageBWallLeft.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/3.2);
    world.addBody(stageBWallLeft);
    const box1_180_18_mesh2 = box1_180_18_mesh.clone();
    combineWorld(box1_180_18_mesh2,stageBWallLeft);
    scene.add(box1_180_18_mesh2);
    // 關卡B地板_出口
    const stageBFloorExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 60)),
        position: new CANNON.Vec3(200, 246, 619),
    })
    world.addBody(stageBFloorExit);
    const box150_1_60 = new THREE.BoxGeometry(300,2,120);
    const box150_1_60_mesh = new THREE.Mesh(box150_1_60,floorM);
    combineWorld(box150_1_60_mesh,stageBFloorExit);
    scene.add(box150_1_60_mesh);
    // 關卡B天花板_出口
    const stageBCeilingExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 60)),
        position: new CANNON.Vec3(200, 266, 619),
    })
    world.addBody(stageBCeilingExit);
    const box150_1_60_mesh2 = new THREE.Mesh(box150_1_60,boxM);;
    combineWorld(box150_1_60_mesh2,stageBCeilingExit);
    scene.add(box150_1_60_mesh2);
    // 關卡B左牆_出口
    const stageBWallLeftExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 100)),
        position: new CANNON.Vec3(289, 256, 610),
    })
    stageBWallLeftExit.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0), Math.PI* -.29);
    world.addBody(stageBWallLeftExit);
    const box1_10_100 = new THREE.BoxGeometry(2,20,200);
    const box1_10_100_mesh = new THREE.Mesh(box1_10_100,boxM);
    combineWorld(box1_10_100_mesh,stageBWallLeftExit);
    scene.add(box1_10_100_mesh);
    // 關卡B右牆_出口
    const stageBWallRightExit = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 100)),
        position: new CANNON.Vec3(111, 256, 610),
    })
    stageBWallRightExit.quaternion.setFromAxisAngle(new CANNON.Vec3(0,1,0), Math.PI* .29);
    world.addBody(stageBWallRightExit);
    const box1_10_100_mesh2 = box1_10_100_mesh.clone();
    combineWorld(box1_10_100_mesh2,stageBWallRightExit);
    scene.add(box1_10_100_mesh2);
    // 關卡B後牆_球
    const stageBWallBehindBall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 30, 1)),
        position: new CANNON.Vec3(200, 293, 525),
    })
    world.addBody(stageBWallBehindBall);
    const box150_30_1 = new THREE.BoxGeometry(300,60,2);
    const box150_30_1_mesh = new THREE.Mesh(box150_30_1,boxM);
    combineWorld(box150_30_1_mesh,stageBWallBehindBall);
    scene.add(box150_30_1_mesh);
    // 關卡B前牆_球
    const stageBWallFrontBall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 30, 1)),
        position: new CANNON.Vec3(200, 295, 560.3),
    })
    world.addBody(stageBWallFrontBall);
    const box150_30_1_mesh2 = box150_30_1_mesh.clone();
    combineWorld(box150_30_1_mesh2,stageBWallFrontBall);
    scene.add(box150_30_1_mesh2);
    // 關卡B天花板_球
    const stageBCeilingBall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(150, 1, 20)),
        position: new CANNON.Vec3(200, 320, 545),
    })
    world.addBody(stageBCeilingBall);
    const box150_1_20 = new THREE.BoxGeometry(300,2,40);
    const box150_1_20_mesh = new THREE.Mesh(box150_1_20,boxM);
    combineWorld(box150_1_20_mesh,stageBCeilingBall);
    scene.add(box150_1_20_mesh);
    // 關卡B右牆_球
    const stageBWallRightBall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 30, 20)),
        position: new CANNON.Vec3(50, 290, 542.5),
    })
    world.addBody(stageBWallRightBall);
    const box1_30_20 = new THREE.BoxGeometry(2,60,40);
    const box1_30_20_mesh = new THREE.Mesh(box1_30_20,boxM);
    combineWorld(box1_30_20_mesh,stageBWallRightBall);
    scene.add(box1_30_20_mesh);
    // 關卡B左牆_球
    const stageBWallLefBall = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 30, 20)),
        position: new CANNON.Vec3(350, 290, 542.5),
    })
    world.addBody(stageBWallLefBall);
    const box1_30_20_mesh2 = box1_30_20_mesh.clone();
    combineWorld(box1_30_20_mesh2,stageBWallLefBall);
    scene.add(box1_30_20_mesh2);
    // 關卡C地板1
    const stageCTubeFloor1 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 200)),
        position: new CANNON.Vec3(200, 226, 850),
    })
    world.addBody(stageCTubeFloor1);
    const box10_1_200 = new THREE.BoxGeometry(20,2,400);
    const box10_1_200_mesh = new THREE.Mesh(box10_1_200,floorM);
    combineWorld(box10_1_200_mesh,stageCTubeFloor1);
    scene.add(box10_1_200_mesh);
    // 關卡C地板2
    const stageCTubeFloor2 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 185)),
        position: new CANNON.Vec3(200, 186, 885),
    })
    world.addBody(stageCTubeFloor2);
    const box10_1_185 = new THREE.BoxGeometry(20,2,370);
    const box10_1_185_mesh = new THREE.Mesh(box10_1_185,floorM);
    combineWorld(box10_1_185_mesh,stageCTubeFloor2);
    scene.add(box10_1_185_mesh);
    // 關卡C天花板通道
    const stageCCeilingTube = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 200)),
        position: new CANNON.Vec3(200, 167, 1270),
    })
    world.addBody(stageCCeilingTube);
    // 關卡C地板3
    const stageCTubeFloor3 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 400)),
        position: new CANNON.Vec3(200, 146, 1070),
    })
    world.addBody(stageCTubeFloor3);
    const box10_1_400 = new THREE.BoxGeometry(20,2,800);
    const box10_1_400_mesh = new THREE.Mesh(box10_1_400,floorM);
    combineWorld(box10_1_400_mesh,stageCTubeFloor3);
    scene.add(box10_1_400_mesh);
    // 關卡C天花板
    const stageCTubeCeiling = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 1, 200)),
        position: new CANNON.Vec3(200, 266, 870),
    })
    world.addBody(stageCTubeCeiling);
    const box10_1_200_mesh3 = box10_1_200_mesh.clone();
    combineWorld(box10_1_200_mesh3,stageCTubeCeiling);
    scene.add(box10_1_200_mesh3);
    // 關卡C右牆
    const stageCWallRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 60, 200)),
        position: new CANNON.Vec3(190, 206, 870),
    })
    world.addBody(stageCWallRight);
    const box1_60_200 = new THREE.BoxGeometry(2,120,400);
    const box1_60_200_mesh = new THREE.Mesh(box1_60_200,boxM);
    combineWorld(box1_60_200_mesh,stageCWallRight);
    scene.add(box1_60_200_mesh);
    // 關卡C左牆
    const stageCWallLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 60, 200)),
        position: new CANNON.Vec3(210, 206, 870),
    })
    world.addBody(stageCWallLeft);
    const box1_60_200_mesh2 = box1_60_200_mesh.clone();
    combineWorld(box1_60_200_mesh2,stageCWallLeft);
    scene.add(box1_60_200_mesh2);
    // 關卡C右牆通道
    const stageCTubeWallRight = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 200)),
        position: new CANNON.Vec3(190, 156, 1270),
    })
    world.addBody(stageCTubeWallRight);
    // 關卡C左牆通道
    const stageCTubeWallLeft = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(1, 10, 200)),
        position: new CANNON.Vec3(210, 156, 1270),
    })
    world.addBody(stageCTubeWallLeft);
    // 關卡C後牆
    const stageCTubeWallBehind = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 50, 1)),
        position: new CANNON.Vec3(200, 196, 678),
    })
    world.addBody(stageCTubeWallBehind);
    const box10_50_1_mesh3 = box10_50_1_mesh.clone();
    combineWorld(box10_50_1_mesh3,stageCTubeWallBehind);
    scene.add(box10_50_1_mesh3);
    // 關卡C前牆
    const stageCWallFront = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 50, 1)),
        position: new CANNON.Vec3(200, 216, 1070),
    })
    world.addBody(stageCWallFront);
    const box10_50_1_mesh4 = box10_50_1_mesh.clone();
    combineWorld(box10_50_1_mesh4,stageCWallFront);
    scene.add(box10_50_1_mesh4);
    // 關卡C右牆通道
    const stageCTubeWallFront = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 156, 1470),
    })
    world.addBody(stageCTubeWallFront);

    const movObjT = new THREE.TextureLoader().load( './texture/brick.jpg' );
    const objT = new THREE.MeshBasicMaterial( { map: movObjT } );
    // 關卡C動態障礙1
    const stageCMovObj1 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 236, 750),
    })
    world.addBody(stageCMovObj1);
    const stageCMovObj1mesh = new THREE.Mesh(box10_10_1,objT);
    scene.add(stageCMovObj1mesh);
    let MovObj1 = new gsap.timeline({repeat:-1,repeatDelay: 1});
    MovObj1.to(stageCMovObj1.position, {
        y: 256,
        duration: 1,
    })
    MovObj1.to(stageCMovObj1.position, {
        y: 236,
        duration: 1,
        delay: 1,
    })
    // 關卡C動態障礙2
    const stageCMovObj2 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 256, 850),
    })
    world.addBody(stageCMovObj2);
    const stageCMovObj2mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj2mesh);
    let MovObj2 = new gsap.timeline({repeat:-1,repeatDelay: 1});
    MovObj2.to(stageCMovObj2.position, {
        y: 236,
        duration: 2,
    })
    MovObj2.to(stageCMovObj2.position, {
        y: 256,
        duration: 2,
        delay: 1,
    })
    // 關卡C動態障礙3
    const stageCMovObj3 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 236, 950),
    })
    world.addBody(stageCMovObj3);
    const stageCMovObj3mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj3mesh);
    let MovObj3 = new gsap.timeline({repeat:-1,repeatDelay: 1});
    MovObj3.to(stageCMovObj3.position, {
        y: 256,
        duration: .5,
    })
    MovObj3.to(stageCMovObj3.position, {
        y: 236,
        duration: 1,
        delay: .5,
    })
    // 關卡C動態障礙4
    const stageCMovObj4 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(180, 216, 750),
    })
    world.addBody(stageCMovObj4);
    const stageCMovObj4mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj4mesh);
    let MovObj4 = new gsap.timeline({repeat:-1});
    MovObj4.to(stageCMovObj4.position, {
        x: 200,
        duration: 1.5,
    })
    MovObj4.to(stageCMovObj4.position, {
        y: 196,
        duration: 1,
    })
    MovObj4.to(stageCMovObj4.position, {
        x: 220,
        duration: 1.5,
    })
    MovObj4.to(stageCMovObj4.position, {
        y: 216,
        duration: 0,
    })
    MovObj4.to(stageCMovObj4.position, {
        x: 200,
        duration: 0,
    })
    // 關卡C動態障礙5
    const stageCMovObj5 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(220, 196, 850),
    })
    world.addBody(stageCMovObj5);
    const stageCMovObj5mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj5mesh);
    let MovObj5 = new gsap.timeline({repeat:-1});
    MovObj5.to(stageCMovObj5.position, {
        x: 180,
        duration: .5,
    })
    MovObj5.to(stageCMovObj5.position, {
        y: 216,
        duration: 0,
    })
    MovObj5.to(stageCMovObj5.position, {
        x: 220,
        duration: 2,
    })
    MovObj5.to(stageCMovObj5.position, {
        y: 196,
        duration: 0,
    })
    // 關卡C動態障礙6
    const stageCMovObj6 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(180, 216, 950),
    })
    world.addBody(stageCMovObj6);
    const stageCMovObj6mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj6mesh);
    let MovObj6 = new gsap.timeline({repeat:-1});
    MovObj6.to(stageCMovObj6.position, {
        x: 220,
        duration: 1.5,
    })
    MovObj6.to(stageCMovObj6.position, {
        y: 196,
        duration: 0,
    })
    MovObj6.to(stageCMovObj6.position, {
        x: 180,
        duration: 1.5,
    })
    MovObj6.to(stageCMovObj6.position, {
        y: 216,
        duration: 0,
    })
    // 關卡C動態障礙7
    const stageCMovObj7 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 156, 750),
    })
    world.addBody(stageCMovObj7);
    const stageCMovObj7mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj7mesh);
    let MovObj7 = new gsap.timeline({repeat:-1,repeatDelay: 1});
    MovObj7.to(stageCMovObj7.position, {
        z: 850,
        duration: 1,
    })
    MovObj7.to(stageCMovObj7.position, {
        z: 750,
        duration: 2,
        delay: .5,
    })
    // 關卡C動態障礙8
    const stageCMovObj8 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 176, 950),
    })
    world.addBody(stageCMovObj8);
    const stageCMovObj8mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj8mesh);
    let MovObj8 = new gsap.timeline({repeat:-1,repeatDelay: .5});
    MovObj8.to(stageCMovObj8.position, {
        z: 750,
        duration: 2,
    })
    MovObj8.to(stageCMovObj8.position, {
        z: 950,
        duration: 3,
        delay: 1,
    })
    // 關卡C動態障礙9
    const stageCMovObj9 = new CANNON.Body({
        type: CANNON.Body.STATIC,
        material: new CANNON.Material(),
        shape: new CANNON.Box(new CANNON.Vec3(10, 10, 1)),
        position: new CANNON.Vec3(200, 156, 950),
    })
    world.addBody(stageCMovObj9);
    const stageCMovObj9mesh = stageCMovObj1mesh.clone();
    scene.add(stageCMovObj9mesh);
    let MovObj9 = new gsap.timeline({repeat:-1,repeatDelay: 1});
    MovObj9.to(stageCMovObj9.position, {
        z: 850,
        duration: 3,
    })
    MovObj9.to(stageCMovObj9.position, {
        z: 950,
        duration: 1,
        delay: .5,
    })

    

    
    // 球體c
    const sphereSolid = new CANNON.Body({
        mass: 500,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(200, 315, 544),
    })
    const sphereGeo = new THREE.SphereGeometry(15);
    const sphereM = new THREE.MeshLambertMaterial({ color: 0xffaa00 })
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereM);
    sphereMesh.castShadow = true;
    sphereMesh.receiveShadow = true;
    world.addBody(sphereSolid);
    scene.add(sphereMesh);
    // 球體R1
    const sphereSolidR1 = new CANNON.Body({
        mass: 500,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(170, 315, 544),
    })
    const sphereMeshR1 = sphereMesh.clone();
    world.addBody(sphereSolidR1);
    scene.add(sphereMeshR1);
    // 球體R2
    const sphereSolidR2 = new CANNON.Body({
        mass: 100,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(140, 315, 544),
    })
    const sphereMeshR2 = sphereMesh.clone();
    world.addBody(sphereSolidR2);
    scene.add(sphereMeshR2);
    // 球體R3
    const sphereSolidR3 = new CANNON.Body({
        mass: 300,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(105, 315, 544),
    })
    const sphereMeshR3 = sphereMesh.clone();
    world.addBody(sphereSolidR3);
    scene.add(sphereMeshR3);
    // 球體R4
    const sphereSolidR4 = new CANNON.Body({
        mass: 400,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(70, 315, 544),
    })
    const sphereMeshR4 = sphereMesh.clone();
    world.addBody(sphereSolidR4);
    scene.add(sphereMeshR4);
    // 球體L1
    const sphereSolidL1 = new CANNON.Body({
        mass: 200,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(230, 315, 544),
    })
    const sphereMeshL1 = sphereMesh.clone();
    world.addBody(sphereSolidL1);
    scene.add(sphereMeshL1);
    // 球體L2
    const sphereSolidL2 = new CANNON.Body({
        mass: 500,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(260, 315, 544),
    })
    const sphereMeshL2 = sphereMesh.clone();
    world.addBody(sphereSolidL2);
    scene.add(sphereMeshL2);
    // 球體L3
    const sphereSolidL3 = new CANNON.Body({
        mass: 300,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(295, 315, 544),
    })
    const sphereMeshL3 = sphereMesh.clone();
    world.addBody(sphereSolidL3);
    scene.add(sphereMeshL3);
    // 球體L4
    const sphereSolidL4 = new CANNON.Body({
        mass: 100,
        material: new CANNON.Material(),
        shape: new CANNON.Sphere(15),
        position: new CANNON.Vec3(330, 315, 544),
    })
    const sphereMeshL4 = sphereMesh.clone();
    world.addBody(sphereSolidL4);
    scene.add(sphereMeshL4);
    
    let sphereFall = ()=>{
        if(sphereSolid.position.z<280){
            gsap.to(sphereSolid.position, {
                x: 200, y: 315, z: 544,
                duration: 0,
                delay: 1,
            })
        }
        if(sphereSolidR1.position.z<280){
            gsap.to(sphereSolidR1.position, {
                x: 170, y: 315, z: 544,
                duration: 0,
                delay: 2,
            })
        }
        if(sphereSolidR2.position.z<280){
            gsap.to(sphereSolidR2.position, {
                x: 140, y: 315, z: 544,
                duration: 0,
                delay: 3,
            })
        }
        if(sphereSolidR3.position.z<280){
            gsap.to(sphereSolidR3.position, {
                x: 105, y: 315, z: 544,
                duration: 0,
            })
        }
        if(sphereSolidR4.position.z<280){
            gsap.to(sphereSolidR4.position, {
                x: 70, y: 315, z: 544,
                duration: 0,
                delay: 3,
            })
        }
        if(sphereSolidL1.position.z<280){
            gsap.to(sphereSolidL1.position, {
                x: 230, y: 315, z: 544,
                duration: 0,
                delay: 1,
            })
        }
        if(sphereSolidL2.position.z<280){
            gsap.to(sphereSolidL2.position, {
                x: 260, y: 315, z: 544,
                duration: 0,
                delay: .5,
            })
        }
        if(sphereSolidL3.position.z<280){
            gsap.to(sphereSolidL3.position, {
                x: 295, y: 315, z: 544,
                duration: 0,
                delay: 2,
            })
        }
        if(sphereSolidL4.position.z<280){
            gsap.to(sphereSolidL4.position, {
                x: 330, y: 315, z: 544,
                duration: 0,
                delay: 1,
            })
        }
    }
    
    const pointA = new THREE.Object3D();
    pointA.position.set(100,10,3);
    scene.add(pointA);
    const pointB = new THREE.Object3D();
    pointB.position.set(70,80,30);
    scene.add(pointB);
    const pointC = new THREE.Object3D();
    pointC.position.set(200,255,674);
    scene.add(pointC);
    const pointD = new THREE.Object3D();
    pointD.position.set(200,155,1072);
    scene.add(pointD);
    const pointE = new THREE.Object3D();
    pointE.position.set(200,155,1420);
    scene.add(pointE);
    let stageHint = ()=>{
        if(distance(playerSolid, pointA)<30){
            $$('#stageName').innerHTML = 'Stage A'
            $$('#stageContent').innerHTML = 'Static Obstacle. Find the way out to get to the next stage.'
            gsap.to($$('#stageHint'), {
                opacity: 1,
                duration: 0,
            })
        }else if(distance(playerSolid, pointA)>50){
            gsap.to($$('#stageHint'), {
                opacity: 0,
                duration: 1,
            })
        }
        if(distance(playerSolid, pointB)<30){
            $$('#stageName').innerHTML = 'Stage B'
            $$('#stageContent').innerHTML = 'Falling Balls. Doge the falling balls.'
            gsap.to($$('#stageHint'), {
                opacity: 1,
                duration: 0,
            })
        }else if(distance(playerSolid, pointB)>50){
            gsap.to($$('#stageHint'), {
                opacity: 0,
                duration: 1,
            })
        }
        if(distance(playerSolid, pointC)<30){
            $$('#stageName').innerHTML = 'Stage C'
            $$('#stageContent').innerHTML = `Moving Obstacle. Mind your head and don't get hurt`
            gsap.to($$('#stageHint'), {
                opacity: 1,
                duration: 0,
            })
        }else if(distance(playerSolid, pointC)>50){
            gsap.to($$('#stageHint'), {
                opacity: 0,
                duration: 1,
            })
        }
        if(distance(playerSolid, pointD)<30){
            $$('#stageName').innerHTML = 'Wormhole'
            $$('#stageContent').innerHTML = `Your now traveling through the wormhole, hold your controllers.`
            gsap.to($$('#stageHint'), {
                opacity: 1,
                duration: 0,
            })
        }else if(distance(playerSolid, pointD)>50){
            gsap.to($$('#stageHint'), {
                opacity: 0,
                duration: 1,
            })
        }
        if(distance(playerSolid, pointD)<348&&distance(playerSolid, pointE)<348){
            gsap.to(camera, {
                fov: 179,
                duration: 1,
            })
        }else{
            gsap.to(camera, {
                fov: 60,
                duration: 1,
            })
        }
    }
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