// ------ body1 ------ //
import body01black from "../../assets/model3d/body_01/body_01_black.glb";
import body01blue from "../../assets/model3d/body_01/body_01_blue.glb";
import body01green from "../../assets/model3d/body_01/body_01_green.glb";
import body01red from "../../assets/model3d/body_01/body_01_red.glb";
import body01white from "../../assets/model3d/body_01/body_01_white.glb";
// ------ body2 ------ //
import body02black from "../../assets/model3d/body_02/body_02_black.glb";
import body02blue from "../../assets/model3d/body_02/body_02_blue.glb";
import body02green from "../../assets/model3d/body_02/body_02_green.glb";
import body02red from "../../assets/model3d/body_02/body_02_red.glb";
import body02white from "../../assets/model3d/body_02/body_02_white.glb";
// ------ body3 ------ //
import body03black from "../../assets/model3d/body_03/body_03_black.glb";
import body03blue from "../../assets/model3d/body_03/body_03_blue.glb";
import body03green from "../../assets/model3d/body_03/body_03_green.glb";
import body03red from "../../assets/model3d/body_03/body_03_red.glb";
import body03white from "../../assets/model3d/body_03/body_03_white.glb";
// ------ propellor1 ------ //
import propellor01black from "../../assets/model3d/propellor01/propeller_01_black.glb";
import propellor01blue from "../../assets/model3d/propellor01/propellor_01_blue.glb";
import propellor01green from "../../assets/model3d/propellor01/propellor_01_green.glb";
import propellor01red from "../../assets/model3d/propellor01/propellor_01_red.glb";
import propellor01white from "../../assets/model3d/propellor01/propellor_01_white.glb";
// ------ propellor2 ------ //
import propellor02black from "../../assets/model3d/propellor02/propellor_02_black.glb";
import propellor02blue from "../../assets/model3d/propellor02/propellor_02_blue.glb";
import propellor02green from "../../assets/model3d/propellor02/propellor_02_green.glb";
import propellor02red from "../../assets/model3d/propellor02/propellor_02_red.glb";
import propellor02white from "../../assets/model3d/propellor02/propellor_02_white.glb";
// ------ propellor3 ------ //
import propellor03black from "../../assets/model3d/propellor03/propellor_03_black.glb";
import propellor03blue from "../../assets/model3d/propellor03/propellor_03_blue.glb";
import propellor03green from "../../assets/model3d/propellor03/propellor_03_green.glb";
import propellor03red from "../../assets/model3d/propellor03/propellor_03_red.glb";
import propellor03white from "../../assets/model3d/propellor03/propellor_03_white.glb";
// ----- motor ----- //
// ----- controller ----- //

import { ref } from "vue";

export const droneModels = ref({
  body01: {
    id: 1,
    name: "body01",
    weight: 3000,
    color: {
      1: body01black,
      2: body01blue,
      3: body01green,
      4: body01red,
      5: body01white,
    },
  },
  body02: {
    id: 2,
    name: "body02",
    weight: 3300,
    color: {
      1: body02black,
      2: body02blue,
      3: body02green,
      4: body02red,
      5: body02white,
    },
  },
  body03: {
    id: 3,
    name: "body03",
    weight: 3600,
    color: {
      1: body03black,
      2: body03blue,
      3: body03green,
      4: body03red,
      5: body03white,
    },
  },
});
export const propellorModels = ref({
  propellor01: {
    id: 1,
    name: "propellor01",
    weight: 300,
    color: {
      1: propellor01black,
      2: propellor01blue,
      3: propellor01green,
      4: propellor01red,
      5: propellor01white,
    },
  },
  propellor02: {
    id: 2,
    name: "propellor02",
    weight: 350,
    color: {
      1: propellor02black,
      2: propellor02blue,
      3: propellor02green,
      4: propellor02red,
      5: propellor02white,
    },
  },
  propellor03: {
    id: 3,
    name: "propellor03",
    weight: 400,
    color: {
      1: propellor03black,
      2: propellor03blue,
      3: propellor03green,
      4: propellor03red,
      5: propellor03white,
    },
  },
});

export const motorModels = ref({
  motor01: {
    id: 1,
    name: "motor01",
    rpm: 4000,
    kgm: 8,
  },
  motor02: {
    id: 2,
    name: "motor02",
    rpm: 4500,
    kgm: 9,
  },
  motor03: {
    id: 3,
    name: "motor03",
    rpm: 5000,
    kgm: 10,
  },
});

export const controllerModels = ref({
  controller01: {
    id: 1,
    name: "controller01",
    kgmc: 1,
  },
  motor02: {
    id: 2,
    name: "controller02",
    kgmc: 1.1,
  },
  motor03: {
    id: 3,
    name: "controller03",
    kgmc: 0.9,
  },
});

//function
const maxSpeed =
  (motor.rpm * motor.kgm * controller.kgmc) /
  (body.weight + propellor.weight) /
  10;

const load = motor.kgm;

const accelerateTime = (motor.kgm * controller.kgmc) ^ (2 / 40);
