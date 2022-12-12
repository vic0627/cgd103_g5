import { reactive} from "vue";
//====================================================== products
import img1_1 from "/src/assets/images/shop/body_01_green_1.png";
import img1_2 from "/src/assets/images/shop/body_01_green_2.png";
import img1_3 from "/src/assets/images/shop/body_01_green_3.png";

import img2_1 from "/src/assets/images/shop/body_01_white_1.png";
import img2_2 from "/src/assets/images/shop/body_01_white_2.png";
import img2_3 from "/src/assets/images/shop/body_01_white_3.png";

import img3_1 from "/src/assets/images/shop/body_01_red_1.png";
import img3_2 from "/src/assets/images/shop/body_01_red_2.png";
import img3_3 from "/src/assets/images/shop/body_01_red_3.png";

import img4_1 from "/src/assets/images/shop/body_01_black_1.png";
import img4_2 from "/src/assets/images/shop/body_01_black_2.png";
import img4_3 from "/src/assets/images/shop/body_01_black_3.png";

import img5_1 from "/src/assets/images/shop/body_01_blue_1.png";
import img5_2 from "/src/assets/images/shop/body_01_blue_2.png";
import img5_3 from "/src/assets/images/shop/body_01_blue_3.png";

import img6_1 from "/src/assets/images/shop/body_02_red_1.png";
import img6_2 from "/src/assets/images/shop/body_02_red_2.png";
import img6_3 from "/src/assets/images/shop/body_02_red_3.png";

import img7_1 from "/src/assets/images/shop/body_02_white_1.png";
import img7_2 from "/src/assets/images/shop/body_02_white_2.png";
import img7_3 from "/src/assets/images/shop/body_02_white_3.png";

import img8_1 from "/src/assets/images/shop/body_02_green_1.png";
import img8_2 from "/src/assets/images/shop/body_02_green_2.png";
import img8_3 from "/src/assets/images/shop/body_02_green_3.png";

import img9_1 from "/src/assets/images/shop/body_02_blue_1.png";
import img9_2 from "/src/assets/images/shop/body_02_blue_2.png";
import img9_3 from "/src/assets/images/shop/body_02_blue_3.png";

import img10_1 from "/src/assets/images/shop/body_02_black_1.png";
import img10_2 from "/src/assets/images/shop/body_02_black_2.png";
import img10_3 from "/src/assets/images/shop/body_02_black_3.png";

import img11_1 from "/src/assets/images/shop/body_03_red_1.png";
import img11_2 from "/src/assets/images/shop/body_03_red_2.png";
import img11_3 from "/src/assets/images/shop/body_03_red_3.png";

import img12_1 from "/src/assets/images/shop/body_03_white_1.png";
import img12_2 from "/src/assets/images/shop/body_03_white_2.png";
import img12_3 from "/src/assets/images/shop/body_03_white_3.png";

import img13_1 from "/src/assets/images/shop/body_03_black_1.png";
import img13_2 from "/src/assets/images/shop/body_03_black_2.png";
import img13_3 from "/src/assets/images/shop/body_03_black_3.png";

import img14_1 from "/src/assets/images/shop/body_03_blue_1.png";
import img14_2 from "/src/assets/images/shop/body_03_blue_2.png";
import img14_3 from "/src/assets/images/shop/body_03_blue_3.png";

//======================================================= accessories

import imga1_1 from "/src/assets/images/shop/propellor_01_black_1.png";
import imga1_2 from "/src/assets/images/shop/propellor_01_black_2.png";

import imga2_1 from "/src/assets/images/shop/propellor_01_blue_1.png";
import imga2_2 from "/src/assets/images/shop/propellor_01_blue_2.png";

import imga3_1 from "/src/assets/images/shop/propellor_01_green_1.png";
import imga3_2 from "/src/assets/images/shop/propellor_01_green_2.png";

import imga4_1 from "/src/assets/images/shop/propellor_01_red_1.png";
import imga4_2 from "/src/assets/images/shop/propellor_01_red_2.png";

import imga5_1 from "/src/assets/images/shop/propellor_01_white_1.png";
import imga5_2 from "/src/assets/images/shop/propellor_01_white_2.png";

import imga6_1 from "/src/assets/images/shop/propellor_02_black_1.png";
import imga6_2 from "/src/assets/images/shop/propellor_02_black_2.png";

import imga7_1 from "/src/assets/images/shop/propellor_02_blue_1.png";
import imga7_2 from "/src/assets/images/shop/propellor_02_blue_2.png";

import imga8_1 from "/src/assets/images/shop/propellor_02_green_1.png";
import imga8_2 from "/src/assets/images/shop/propellor_02_green_2.png";

import imga9_1 from "/src/assets/images/shop/propellor_02_red_1.png";
import imga9_2 from "/src/assets/images/shop/propellor_02_red_2.png";

import imga10_1 from "/src/assets/images/shop/propellor_02_white_1.png";
import imga10_2 from "/src/assets/images/shop/propellor_02_white_2.png";

import imga11_1 from "/src/assets/images/shop/propellor_03_black_1.png";
import imga11_2 from "/src/assets/images/shop/propellor_03_black_2.png";

import imga12_1 from "/src/assets/images/shop/propellor_03_blue_1.png";
import imga12_2 from "/src/assets/images/shop/propellor_03_blue_2.png";

import imga13_1 from "/src/assets/images/shop/propellor_03_green_1.png";
import imga13_2 from "/src/assets/images/shop/propellor_03_green_2.png";

import imga14_1 from "/src/assets/images/shop/propellor_03_red_1.png";
import imga14_2 from "/src/assets/images/shop/propellor_03_red_2.png";
//======================================================= bundle
import imgb1 from "/src/assets/images/shop/bundle_01.png";
import imgb2 from "/src/assets/images/shop/bundle_02.jpg";

    export  const steps = [
    {
      id: "1",
      text: "Choose your favorite color",
      diff: "color",
    },
    {
      id: "2",
      text: "Choose your favorite wing",
      diff: "wing",
    },
    {
      id: "3",
      text: "Choose your favorite speed",
      diff: "speed",
    },
    {
      id: "4",
      text: "Finish your exclusive FVP",
      diff: "own FVP",
    },
    ];
    export  const products =reactive([
    //mavic
    {
      id: "1",
      name: "p1",
      title: "Mavic 1 Green",
      Original_Price: "USD$900",
      src1: [img1_1,img1_2,img1_3,],
      new: "true",
      sale: "false",
    },
    {
      id: "2",
      name: "p2",
      title: "Mavic 2 White",
      Original_Price: "USD$900",
      src2: [img2_1,img2_2,img2_3,],
      new: false,
      sale: false,
    },
    {
      id: 3,
      name: "p3",
      title: "Mavic 3 Red",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src3: [img3_1,img3_2,img3_3,],
      sale: true,
      new: false,
    },
    {
      id: 4,
      name: "p4",
      title: "Mavic 4 Black",
      Original_Price: "USD$900",
      src4: [img4_1,img4_2,img4_3,],
      new: true,
      sale: false,
    },
    {
      id: 5,
      name: "p5",
      title: "Mavic 5 Blue",
      Original_Price: "USD$900",
      src5: [img5_1,img5_2,img5_3,],
      new: false,
      sale: false,
    },
    //charl
    {
      id: 6,
      name: "p6",
      title: "Charl 1 Red",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src6: [img6_1,img6_2,img6_3,],
      sale: true,
      new: false,
    },
    {
      id: 7,
      name: "p7",
      title: "Charl 2 White",
      Original_Price: "USD$900",
      src7: [img7_1,img7_2,img7_3,],
      new: true,
      sale: false,
    },
    {
      id: 8,
      name: "p8",
      title: "Charl 3 Green",
      Original_Price: "USD$900",
      src8: [img8_1,img8_2,img8_3,],
      new: false,
      sale: false,
    },
    {
      id: 9,
      name: "p9",
      title: "Charl 4 Blue",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src9: [img9_1,img9_2,img9_3,],
      sale: true,
      new: false,
    },
    {
      id: 10,
      name: "p10",
      title: "Charl 5 Black",
      Original_Price: "USD$900",
      src10: [img10_1,img10_2,img10_3,],
      new: false,
      sale: false,
    },
    {
      id: 11,
      name: "p11",
      title: "Chac 1 Red",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src11: [img11_1,img11_2,img11_3,],
      sale: true,
      new: false,
    },
    //Chac
    {
      id: 12,
      name: "p12",
      title: "Chac 2 White",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src12: [img12_1,img12_2,img12_3,],
      sale: true,
      new: false,
    },
    {
      id: 13,
      name: "p13",
      title: "Chac 3 Black",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src13: [img13_1,img13_2,img13_3,],
      sale: true,
      new: false,
    },
    {
      id: 14,
      name: "p14",
      title: "Chac 4 Blue",
      Original_Price: "USD$900",
      Discount_Price: "USD$888",
      src14: [img14_1,img14_2,img14_3,],
      sale: true,
      new: false,
    },
    ]);
    export  const accessories = reactive([
    {
      id: 1,
      name: "a1",
      title: "Cir propeller black",
      Original_Price: "USD$300",
      src1: [imga1_1,imga1_2],
      new: true,
    },
    {
      id: 2,
      name: "a2",
      title: "Cir propeller blue",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src2: [imga2_1,imga2_2],
      sale: true,
    },
    {
      id: 3,
      name: "a3",
      title: "Cir propeller green",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src3: [imga3_1,imga3_2],
      sale: false,
    },
    {
      id: 4,
      name: "a4",
      title: "Cir propeller red",
      Original_Price: "USD$300",
      src4: [imga4_1,imga4_2],
      // new: true,
    },
    {
      id: 5,
      name: "a5",
      title: "Cir propeller white",
      Original_Price: "USD$300",
      src5: [imga5_1,imga5_2],
      new: true,
    },
  
    {
      id: 6,
      name: "a6",
      title: "Rect propeller black",
      Original_Price: "USD$300",
      src6: [imga6_1,imga6_2],
      new: true,
    },
    {
      id: 7,
      name: "a2",
      title: "Rect propeller blue",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src7: [imga7_1,imga7_2],
      sale: true,
    },
    {
      id: 8,
      name: "a8",
      title: "Rect propeller green",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src8: [imga8_1,imga8_2],
      sale: true,
    },
    {
      id: 9,
      name: "a9",
      title: "Rect propeller red",
      Original_Price: "USD$300",
      src9: [imga9_1,imga9_2],
      new: true,
    },
    {
      id: 10,
      name: "a10",
      title: "Rect propeller white",
      Original_Price: "USD$300",
      src10: [imga10_1,imga10_2],
      new: true,
    },
  
    {
      id: 11,
      name: "a11",
      title: "Tri propeller black",
      Original_Price: "USD$300",
      src11: [imga11_1,imga11_2],
      new: true,
    },
    {
      id: 12,
      name: "a12",
      title: "Tri propeller blue",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src12: [imga12_1,imga12_2],
      sale: true,
    },
    {
      id: 13,
      name: "a13",
      title: "Tri propeller green",
      Original_Price: "USD$300",
      Discount_Price: "USD$200",
      src13: [imga13_1,imga13_2],
      sale: true,
    },
    {
      id: 14,
      name: "a14",
      title: "Tri propeller red",
      Original_Price: "USD$300",
      src14: [imga14_1,imga14_2],
      new: true,
    },
    ]);
    export  const bundle_A = reactive([
    {
      name: "A1",
      title: "Simple Bundle",
      price: "USD$1200",
      src: imgb1,
    },
    {
      name: "A2",
      title: "Simple Bundle",
      price: "USD$1200",
      src: imgb1,
    },
    {
      name: "A3",
      title: "Simple Bundle",
      price: "USD$1200",
      src: imgb1,
    },
    {
      name: "A4",
      title: "Simple Bundle",
      price: "USD$1200",
      src: imgb1,
    },
    ]);
    export  const bundle_B = reactive([
    {
      name: "b1",
      title: "Pro Bundle",
      price: "USD$1400",
      src: imgb2,
    },
    {
      name: "b2",
      title: "Pro Bundle",
      price: "USD$1400",
      src: imgb2,
    },
    {
      name: "b3",
      title: "Pro Bundle",
      price: "USD$1400",
      src: imgb2,
    },
    {
      name: "b4",
      title: "Pro Bundle",
      price: "USD$1400",
      src: imgb2,
    },
    ]);