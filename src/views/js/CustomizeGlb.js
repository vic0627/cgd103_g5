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
// ------ introduction ------ //
import step1 from "../../assets/images/custom/step1.jpg";
import step2 from "../../assets/images/custom/step2.jpg";
import step3 from "../../assets/images/custom/step3.jpg";
import step4 from "../../assets/images/custom/step4.jpg";
import step5 from "../../assets/images/custom/step5.jpg";
import step6 from "../../assets/images/custom/step6.jpg";
import step7 from "../../assets/images/custom/step7.jpg";
import step8 from "../../assets/images/custom/step8.jpg";

import { ref } from "vue";

export const introduction = ref({
  1: {
    img: step1,
    text: "Welcome to the customize service, you can get your custom drone here. The step which your being will show above the title.",
  },
  2: {
    img: step2,
    text: "Choose the type of body you like, there are five colors availiable for each body and propellor.",
  },
  3: {
    img: step3,
    text: "Then on, detail informations of your selection will update to the dashboard immediately, and 3D model, which can be rotated and zoomed freely, will show on the area next to the selection.",
  },
  4: {
    img: step4,
    text: "On the mobile device, try to click on the tag near the edge of the screen to see the detail informations.",
  },
  5: {
    img: step5,
    text: "After choosing the exterior part of drone, try to choose the functional parts, it will affect the performance of drone intuitively.",
  },
  6: {
    img: step6,
    text: "If the dashboard hit the red line, data will shine red to warn you.",
  },
  7: {
    img: step8,
    text: `Try dragging the "Alpha fader", It can change the opacity of the selection part, while the alpha value is under 5%, the page will turn into "Display mode".`,
  },
  8: {
    img: step7,
    text: `In each step, if you're not satisfy of your previous selection, try clicking the "Undo" button. While finishing the cutomizing, click the "buy" button to add your drone to the shopping cart.`,
  },
});
export const droneModels = ref({
  body01: {
    id: 1,
    name: "body01",
    price: 500.00,
    weight: 3000,
    color: {
      1: {
        id: 1,
        src: body01black,
        png: "body_01_black_3.png"
      },
      2: {
        id: 2,
        src: body01blue,
        png: "body_01_blue_3.png"
      },
      3: {
        id: 3,
        src: body01green,
        png: "body_01_green_3.png"
      },
      4: {
        id: 4,
        src: body01red,
        png: "body_01_red_3.png"
      },
      5: {
        id: 5,
        src: body01white,
        png: "body_01_white_3.png"
      },
    },
  },
  body02: {
    id: 2,
    name: "body02",
    price: 600.00,
    weight: 3300,
    color: {
      1: {
        id: 1,
        src: body02black,
        png: "body_02_black_1.png"
      },
      2: {
        id: 2,
        src: body02blue,
        png: "body_02_blue_1.png"
      },
      3: {
        id: 3,
        src: body02green,
        png: "body_02_green_1.png"
      },
      4: {
        id: 4,
        src: body02red,
        png: "body_02_red_1.png"
      },
      5: {
        id: 5,
        src: body02white,
        png: "body_02_white_1.png"
      },
    },
  },
  body03: {
    id: 3,
    name: "body03",
    price: 700.00,
    weight: 3600,
    color: {
      1: {
        id: 1,
        src: body03black,
        png: "body_03_black_1.png"
      },
      2: {
        id: 2,
        src: body03blue,
        png: "body_03_blue_1.png"
      },
      3: {
        id: 3,
        src: body03green,
        png: "body_02_green_1.png"
      },
      4: {
        id: 4,
        src: body03red,
        png: "body_03_red_1.png"
      },
      5: {
        id: 5,
        src: body03white,
        png: "body_03_white_1.png"
      },
    },
  },
});
export const propellorModels = ref({
  propellor01: {
    id: 1,
    name: "propellor01",
    price: 200.00,
    weight: 300,
    color: {
      1: {
        id: 1,
        src: propellor01black,
        png: "propellor_01_black_1.png"
      },
      2: {
        id: 2,
        src: propellor01blue,
        png: "propellor_01_blue_1.png"
      },
      3: {
        id: 3,
        src: propellor01green,
        png: "propellor_01_green_1.png"
      },
      4: {
        id: 4,
        src: propellor01red,
        png: "propellor_01_red_1.png"
      },
      5: {
        id: 5,
        src: propellor01white,
        png: "propellor_01_white_1.png"
      },
    },
  },
  propellor02: {
    id: 2,
    name: "propellor02",
    price: 300.00,
    weight: 350,
    color: {
      1: {
        id: 1,
        src: propellor02black,
        png: "propellor_02_black_1.png"
      },
      2: {
        id: 2,
        src: propellor02blue,
        png: "propellor_02_blue_1.png"
      },
      3: {
        id: 3,
        src: propellor02green,
        png: "propellor_02_green_1.png"
      },
      4: {
        id: 4,
        src: propellor02red,
        png: "propellor_02_red_1.png"
      },
      5: {
        id: 5,
        src: propellor02white,
        png: "propellor_02_white_1.png"
      },
    },
  },
  propellor03: {
    id: 3,
    name: "propellor03",
    price: 400.00,
    weight: 400,
    color: {
      1: {
        id: 1,
        src: propellor03black,
        png: "propellor_03_black_1.png"
      },
      2: {
        id: 2,
        src: propellor03blue,
        png: "propellor_03_blue_1.png"
      },
      3: {
        id: 3,
        src: propellor03green,
        png: "propellor_03_green_1.png"
      },
      4: {
        id: 4,
        src: propellor03red,
        png: "propellor_03_red_1.png"
      },
      5: {
        id: 5,
        src: propellor03white,
        png: "propellor_02_white_1.png"
      },
    },
  },
});

export const motorModels = ref({
  motor01: {
    id: 1,
    name: "motor01",
    price: 1200.00,
    rpm: 5300,
    kgm: 8,
  },
  motor02: {
    id: 2,
    name: "motor02",
    price: 1400.00,
    rpm: 4800,
    kgm: 9,
  },
  motor03: {
    id: 3,
    name: "motor03",
    price: 1600.00,
    rpm: 4400,
    kgm: 10,
  },
});

export const controllerModels = ref({
  controller01: {
    id: 1,
    name: "controller01",
    price: 800.00,
    kgmc: 1,
  },
  controller02: {
    id: 2,
    name: "controller02",
    price: 1100.00,
    kgmc: 1.1,
  },
  controller03: {
    id: 3,
    name: "controller03",
    price: 1200.00,
    kgmc: 0.9,
  },
});

