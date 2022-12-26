<script setup>
import gsap from "gsap";
import { onMounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount } from 'vue';
import router from '@/router';
import { log, $$, $all, getW } from '../composables/useCommon';
import { introduction ,droneModels, propellorModels } from './js/CustomizeGlb';
import * as CUS from './js/CustomizeThree';
import dashBoardGroupComponent from '@/components/dashBoardGroupComponents.vue';
import scrollHintComponent from '@/components/scrollHintComponent.vue';
import { niddleSpin } from '../composables/useDashBoardMove';
import { bodyInit } from '../composables/useOnunmounted';
bodyInit();
let w = null;
let ww = window.innerWidth;
onMounted(()=> {
    fetchCustom();
    w = getW('.dashBoard');
    canvasRe();
    window.addEventListener('resize', ()=> {
        w = getW('.dashBoard');
        ww = window.innerWidth;
        canvasRe();
    });
    CUS.sceneInit();
    CUS.animation();
    introductionInit();
});
onBeforeUpdate(() => {
    $$('.loadBox').style.display = 'block';
    gsap.to('.loadProgress', {
        width: CUS.modelLoading.value + '%',
        duration: .1,
    });
});
onUpdated(() => {
    if(CUS.modelLoading.value===0)$$('.loadBox').style.display = 'none';
    if($$('.lightBoxContent'))$$('.lightBoxContent').addEventListener('scroll', (e)=>{
        if(e.target.scrollTop>0){
            gsap.to('.shc', {
                opacity: 0,
                duration: .5,
            })
        }else{
            gsap.to('.shc', {
                opacity: 1,
                duration: .5,
            })
        };
    });
    
});

let customMotorItem, customControllerItem;
const motorModels = ref({}), controllerModels = ref({});
const fetchCustom = () => {
    fetch("http://localhost/cgd103_g5/public/g5PHP/postCust.php", {
        method: "POST",
        body: new URLSearchParams({ sql: "select * from tibamefe_cgd103g5.customize" }),
    })
        .then(res => res.json())
        .then(json => {
            customMotorItem = json.filter(i => String(i.prd_no).includes('1112111'));
            customControllerItem = json.filter(i => String(i.prd_no).includes('1112112'));
            return {
                customMotorItem,
                customControllerItem
            }
        })
        .then(output => {
            for(let i=0; i<output.customMotorItem.length; i++){
                motorModels.value[`motor0${i+1}`] = {
                    id: i+1,
                    name: output.customMotorItem[i].prd_name,
                    price: output.customMotorItem[i].prd_price,
                    rpm: Number(output.customMotorItem[i].rpm),
                    kgm: Number(output.customMotorItem[i].kgm),
                };
            }
            for(let i=0; i<output.customControllerItem.length; i++){
                controllerModels.value[`controller0${i+1}`] = {
                    id: i+1,
                    name: output.customControllerItem[i].prd_name,
                    price: output.customControllerItem[i].prd_price,
                    kgmc: Number(output.customControllerItem[i].kgmc),
                };
            }
        })
};
const units = ref({
    maxSpeed: {
        'id': 1,
        title: 'Max Speed',
        unit: 'km/h',
        value: 0,
        ratio: 1.5,
        scale: {
            1: 160,
            2: 140,
            3: 120,
            4: 100,
            5: 80,
            6: 60,
            7: 40,
            8: 20,
            9: 0,
        },
    },
    maxload: {
        'id': 2,
        title: 'Max Load',
        unit: 'kg',
        value: 0,
        ratio: 6,
        scale: {
            1: 40,
            2: 35,
            3: 30,
            4: 25,
            5: 20,
            6: 15,
            7: 10,
            8: 5,
            9: 0,
        },
    },
    rotatingSpeed: {
        'id': 3,
        title: 'Rotating Speed',
        unit: 'x1000 rpm',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    totalWeight: {
        'id': 4,
        title: 'Total Weight',
        unit: 'kg',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    accelerateTime: {
        'id': 5,
        title: '100km/h',
        unit: 's',
        value: 0,
        ratio: 30,
        scale: {
            1: 8,
            2: 7,
            3: 6,
            4: 5,
            5: 4,
            6: 3,
            7: 2,
            8: 1,
            9: 0,
        },
    },
    accelerate: {
        'id': 6,
        title: 'Accelerate',
        unit: 'm/s^2',
        value: 0,
        ratio: 10,
        scale: {
            1: 24,
            2: 21,
            3: 18,
            4: 15,
            5: 12,
            6: 9,
            7: 6,
            8: 3,
            9: 0,
        },
    },
})
const step = ref({
    1: {id: 1,
        text: 'Body',
        show: true,
        sBtn: false,
        pBtn: true,
    },
    2: {id: 2,
        text: 'Propellor',
        show: false,
        sBtn: true,
        pBtn: true,
    },
    3: {id: 3,
        text: 'Motor',
        show: false,
        sBtn: true,
        pBtn: true,
    },
    4: {id: 4,
        text: 'Controller',
        show: false,
        sBtn: true,
        pBtn: false,
    },
});
const flow = ref(1);
const btnStatus = ref(false);
const buyBtn = ref(false);
let acc;

const undo = () => {
    btnStatus.value = false;
    step.value[flow.value].show = false;
    switch (flow.value) {
        case 2:
            bodyChosen.value.type = 0;
            bodyChosen.value.color = 0;
            bodyChosen.value.weight = 0;
            propellorChosen.value.type = 0;
            propellorChosen.value.color = 0;
            propellorChosen.value.amount = 0;
            propellorChosen.value.weight = 0;
            CUS.removeAll();
            niddleSpin(4, 0, units.value.totalWeight.ratio);
            $all('.colorControl').forEach(c => c.classList.remove('chosen'));
            break;
        case 3:
            motorChosen.value.type = 0;
            motorChosen.value.kgm = 0;
            motorChosen.value.rpm = 0;
            niddleSpin(1, 0, units.value.maxSpeed.ratio);
            niddleSpin(2, 0, units.value.maxload.ratio);
            niddleSpin(3, 0, units.value.rotatingSpeed.ratio);
            niddleSpin(5, 0, units.value.accelerateTime.ratio);
            niddleSpin(6, 0, units.value.accelerate.ratio);
            $all('.motorControl').forEach(c => c.classList.remove('chosen'));
            break;
        case 4:
            kgmcChosen.value.kgmc = 0;
            kgmcChosen.value.type = 0;
            niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
            if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm)>=100){
                acc = accelerate(motorChosen.value.kgm);
            }else{
                acc = 0;
            };
            niddleSpin(5, acc, units.value.accelerateTime.ratio);
            niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
            buyBtn.value = false;
            $all('.controllerControl').forEach(c => c.classList.remove('chosen'));
            break;
    }
    flow.value--;
    step.value[flow.value].show = true;
};
const lightBoxClose = (session = false) => {
	lightBoxShow.value = false;
    lightBoxText.value.title.show = false;
    lightBoxText.value.title.content = '';
    lightBoxText.value.text.show = false;
    lightBoxText.value.text.content = '';
    lightBoxText.value.confirm = false;
    lightBoxText.value.img.show = false;
    if(session){
        set('intro', 'read');
    };
};
const lightBoxText = ref({
    title: {
        show: false,
        content: '',
    },
    text: {
        show: false,
        content: '',
    },
    img: {
        show: false,
        idt: 1,
    },
    confirm: false,
})
const lightBoxShow = ref(false);
const introductionInit = () => {
    if(sessionStorage['intro']===undefined){
        lightBoxShow.value = true;
        lightBoxText.value.text.show = true;
        lightBoxText.value.img.show = true;
        lightBoxText.value.title.show = true;
        lightBoxText.value.title.content = `Introduction`
        lightBoxText.value.text.content = introduction.value[lightBoxText.value.img.idt].text;
    };
};
const introductionFlow = () => {
    lightBoxText.value.img.idt++;
    lightBoxText.value.text.content = introduction.value[lightBoxText.value.img.idt].text;
};
const nextStep = () => {
    if(btnStatus.value){
        step.value[flow.value].show = false;
        flow.value++;
        btnStatus.value = false;
        step.value[flow.value].show = true;
    }else{
        lightBoxShow.value = true;
        lightBoxText.value.title.show = true;
        lightBoxText.value.title.content = 'Please Choose a Drone Part First!';
    }
};

const canvasRe = () => {
    if(ww<575){
        customize3d.width = ww;
        customize3d.height = 300;
    }else if(ww<1023){
        customize3d.width = 400;
        customize3d.height = 400;
    }else{
        customize3d.width = 500;
        customize3d.height = 500;
    };
};
const maxSpeed = (rpm, kgm, kgmc = 1) => parseInt((rpm * kgm * kgmc) / (units.value.totalWeight.value * 1000) * 10);
const accelerateTime = (kgm, kgmc = 1) => (Math.pow(kgm * kgmc, 2) / 40).toFixed(1);
const accelerate = (accelerateTime) => (100 / 3.6 / accelerateTime).toFixed(1);

const bodyChosen = ref({
    type: 0,
    color: 0,
    weight: 0,
});

const bodyChoose = (id, nid, src) => {
    CUS.body(id, src);
    units.value.totalWeight.value = (0 + droneModels.value[`body0${id}`].weight)/1000;
    bodyChosen.value.weight = droneModels.value[`body0${id}`].weight;
    bodyChosen.value.type = id;
    bodyChosen.value.color = nid;
    btnStatus.value = true;
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio);
    $all('.colorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.bodyControl${id}${nid}`).classList.add('chosen');
};
const propellorChosen = ref({
   type: 0,
   color: 0,
   amount: 0,
   weight: 0, 
});
const propellorChoose = (id, nid, src) => {
    CUS.propellor(id, src);
    if(id===1){
        propellorChosen.value.weight = propellorModels.value[`propellor0${id}`].weight * 2;
        propellorChosen.value.amount = 2;
    }else{
        propellorChosen.value.weight = propellorModels.value[`propellor0${id}`].weight * 4;
        propellorChosen.value.amount = 4;
    }
    units.value.totalWeight.value = (bodyChosen.value.weight + propellorChosen.value.weight)/1000;
    propellorChosen.value.type = id;
    propellorChosen.value.color = nid;
    btnStatus.value = true;
    niddleSpin(4, units.value.totalWeight.value, units.value.totalWeight.ratio);
    $all('.colorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.propellorControl${id}${nid}`).classList.add('chosen');
};
const motorChosen = ref({
    type: 0,
    rpm: 0,
    kgm: 0,
})
const motorChoose = (id) => {
    motorChosen.value.rpm = motorModels.value[`motor0${id}`].rpm;
    motorChosen.value.kgm = motorModels.value[`motor0${id}`].kgm;
    motorChosen.value.type = id;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm), units.value.maxSpeed.ratio);
    niddleSpin(2, motorChosen.value.kgm, units.value.maxload.ratio);
    niddleSpin(3, motorChosen.value.rpm / 1000, units.value.rotatingSpeed.ratio);
    if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm)>=100){
        acc = accelerate(motorChosen.value.kgm);
    }else{
        acc = 0;
    };
    niddleSpin(5, acc, units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm)), units.value.accelerate.ratio);
    btnStatus.value = true;
    $all('.motorControl').forEach(c => c.classList.remove('chosen'));
    $$(`.motorControl${id}`).classList.add('chosen');
};
const kgmcChosen = ref({
    type: 0,
    kgmc: 0,
});
const controllerChoose = (id) => {
    kgmcChosen.value.kgmc = controllerModels.value[`controller0${id}`].kgmc;
    kgmcChosen.value.type = id;
    niddleSpin(1, maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value.kgmc), units.value.maxSpeed.ratio);
    if(maxSpeed(motorChosen.value.rpm, motorChosen.value.kgm, kgmcChosen.value.kgmc)>=100){
        acc = accelerateTime(motorChosen.value.kgm, kgmcChosen.value.kgmc);
    }else{
        acc = 0;
    };
    niddleSpin(5, acc, units.value.accelerateTime.ratio);
    niddleSpin(6, accelerate(accelerateTime(motorChosen.value.kgm, kgmcChosen.value.kgmc)), units.value.accelerate.ratio);
    btnStatus.value = true;
    if(flow.value===4&&btnStatus.value){
        buyBtn.value = true;
    }
    $all('.controllerControl').forEach(c => c.classList.remove('chosen'));
    $$(`.controllerControl${id}`).classList.add('chosen');
};
let toggle = false;
const toggleBoard = () => {
    let left = -354, mrl = -177, mr = '0 0 20px';
    if(ww>=576 && ww<1024){
        left = -554;
        mrl = -277;
        mr = '0 60px 20px';
    }
    if(toggle){
        gsap.to('.boards', {
            right: 'auto',
            left,
            margin: 0,
            duration: .3,
        })
        gsap.to('.tag', {
            position: 'absolute',
            top: '20%',
            right: '-50px',
            width: 60,
            height: 130,
            writingMode: 'vertical-lr',
            lineHeight: '75px',
            fontSize: '16px',
            margin: '0 0 20px',
            duration: 0,
            delay: .3,
        })
        $$('.name').style.display = 'block';
        $all('.cross').forEach(e => {
            gsap.to(e, {
                rotate: 0,
                duration: 0,
                delay: .3,
            })
            e.style.display = 'none';
        });
        toggle = false;
    }else{
        gsap.to('.boards', {
            left: 50 + '%',
            marginLeft: mrl,
            duration: .3,
        });
        gsap.to('.tag', {
            position: 'relative',
            top: 0,
            right: 0,
            width: 60,
            height: 60,
            writingMode: 'inherit',
            lineHeight: 2,
            fontSize: '32px',
            margin: mr,
            duration: 0,
        })
        $$('.name').style.display = 'none';
        $all('.cross').forEach(e => e.style.display = 'block');
        gsap.to($all('.cross')[0], {
            rotate: '45deg',
            duration: .3,
            delay: .3,
        });
        gsap.to($all('.cross')[1], {
            rotate: '-45deg',
            duration: .3,
            delay: .3,
        });
        toggle = true;
    }
};
let toggleColorControl = ref({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
});
const toggleColor = (id) => {
    if(toggleColorControl.value[id]){
        toggleColorControl.value[id] = false;
    }else{
        toggleColorControl.value[id] = true;
    };
};

const set = (key, val) => {
    sessionStorage.setItem(key, val)
};

const addCart = () => {
    if(sessionStorage.getItem('cartList')===null){
        setSession();
        router.push('/cart');
    }else{
        lightBoxShow.value = true;
        lightBoxText.value.title.show = true;
        lightBoxText.value.title.content = 'You already have some goods in your cart!';
        lightBoxText.value.text.show = true;
        lightBoxText.value.text.content = 'Do you want to add the new customizing product to the cart? (Previous cart list will be cleared)';
        lightBoxText.value.confirm = true;
    }
};
const reCart = () => {
    sessionStorage.clear();
    setSession();
    router.push('/cart');
};
const setSession = () => {
    let prd_body, prd_propellor;
    switch (bodyChosen.value.type) {
        case 1:
            prd_body = 'body01';
            break;
        case 2:
            prd_body = 'body02';
            break;
        case 3:
            prd_body = 'body03';
            break;
    }
    switch (bodyChosen.value.color) {
        case 1:
            prd_body += 'black';
            break;
        case 2:
            prd_body += 'blue';
            break;
        case 3:
            prd_body += 'green';
            break;
        case 4:
            prd_body += 'red';
            break;
        case 5:
            prd_body += 'white';
            break;
    }
    switch (propellorChosen.value.type) {
        case 1:
            prd_propellor = 'propellor01';
            break;
        case 2:
            prd_propellor = 'propellor02';
            break;
        case 3:
            prd_propellor = 'propellor03';
            break;
    }
    switch (propellorChosen.value.color) {
        case 1:
            prd_propellor += 'black';
            break;
        case 2:
            prd_propellor += 'blue';
            break;
        case 3:
            prd_propellor += 'green';
            break;
        case 4:
            prd_propellor += 'red';
            break;
        case 5:
            prd_propellor += 'white';
            break;
        }
    set('cartList', `111111${bodyChosen.value.type}${bodyChosen.value.color}, 111112${propellorChosen.value.type}${propellorChosen.value.color}, 1112111${motorChosen.value.type}, 1112112${kgmcChosen.value.type}`)
    set(`111111${bodyChosen.value.type}${bodyChosen.value.color}`, `{"id":"111111${bodyChosen.value.type}${bodyChosen.value.color}", "name":"${prd_body}", "amount":"1", "price":"${droneModels.value[`body0${bodyChosen.value.type}`].price}"}`);
    set(`111112${propellorChosen.value.type}${propellorChosen.value.color}`, `{"id":"111112${propellorChosen.value.type}${propellorChosen.value.color}", "name":"${prd_propellor}", "amount":"${propellorChosen.value.amount}", "price":"${propellorModels.value[`propellor0${propellorChosen.value.type}`].price}"}`);
    set(`1112111${motorChosen.value.type}`, `{"id":"1112111${motorChosen.value.type}", "name":"motor0${motorChosen.value.type}", "amount":"1", "price":"${motorModels.value[`motor0${motorChosen.value.type}`].price}"}`);
    set(`1112112${kgmcChosen.value.type}`, `{"id":"1112112${kgmcChosen.value.type}", "name":"controller0${kgmcChosen.value.type}", "amount":"1", "price":"${controllerModels.value[`controller0${kgmcChosen.value.type}`].price}"}`);
};
const alpha = ref(null);
const selectionAlpha = (e) => {
    alpha.value = Number(e.target.value);
    gsap.to('.customizeControl', {
        opacity: Number(e.target.value)/100,
        duration: .3,
    });
    displayMode();
};
const displaySwitch = ref({
    num: false,
    digi: true,
})
const displayShow = ref(false);
const displayMode = () => {
    if(alpha.value<5){
        //displaySwitch.value.num = false;
        //displaySwitch.value.digi = true;
        displayShow.value = true;
        $$('.customizeTitle').innerText = 'DISPLAY MODE';
        $$('.customizeTitle').classList.add('displayTitle');
        gsap.to('.customizeTitle', {
            transform: 'skewX(-15deg)',
            duration: .5,
        })
        gsap.to('.paths', {
            opacity: 0,
            duration: .5,
        });
        gsap.to('.displayControls', {
            opacity: 1,
            duration: .5,
        });
        $$('.customizeControl').style.display = 'none';
        $$('#customize3d').width = getW('.mainCus')*2;
        gsap.to('#customize3d', {
            width: getW('.mainCus')*2,
            duration: .5,
        })
        $$('#customize3d').height = 650;
        gsap.to('#customize3d', {
            height: 650,
            duration: .5,
        })
        gsap.to('.boards', {
            top: -60,
            duration: .5,
        })
        CUS.camera.aspect = getW('.mainCus')*2 / 650;
        CUS.renderer.setSize(getW('.mainCus')*2, 650);
        gsap.to('body', {
            background: '#000',
            duration: .5,
        });
        gsap.to('.boards', {
            filter: 'none',
            duration: .5
        });
        $all('.dashBoard').forEach(e => {
            gsap.to(e, {
                background: 'radial-gradient(#F25A2A66, transparent 50%)',
                duration: .5,
            })
        });
        $$('#customize3d').classList.remove('bg3d');
        $$('.lightA').classList.add('skewX');
        $$('.lightB').classList.add('skew-X');
        $all('.digiBoard').forEach(e => e.classList.add('skewX'));
        $all('.boardTitle').forEach(e => e.classList.add('skewX'));
        $all('.boardSpan').forEach(e => e.classList.add('skewX'));
    }else{
        if(ww>1023){
            $$('#customize3d').width = 400;
            gsap.to('#customize3d', {
                width: 400,
                duration: .5,
            })
            $$('#customize3d').height = 400;
            gsap.to('#customize3d', {
                height: 400,
                duration: .5,
            })
            CUS.camera.aspect = 400 / 400;
            CUS.renderer.setSize(400, 400);
        }else if(ww>1199){
            $$('#customize3d').width = 500;
            gsap.to('#customize3d', {
                width: 500,
                duration: .5,
            })
            $$('#customize3d').height = 500;
            gsap.to('#customize3d', {
                height: 500,
                duration: .5,
            })
            CUS.camera.aspect = 500 / 500;
            CUS.renderer.setSize(500, 500);
        };
        //displaySwitch.value.num = true;
        //displaySwitch.value.digi = false;
        displayShow.value = false;
        gsap.to('.boards', {
            top: 0,
            duration: .5,
        })
        $$('.customizeTitle').innerText = 'Custom';
        $$('.customizeTitle').classList.remove('displayTitle');
        gsap.to('.customizeTitle', {
            transform: 'none',
            duration: .5,
        })
        gsap.to('.paths', {
            opacity: 1,
            duration: .5,
        });
        gsap.to('.displayControls', {
            opacity: 0,
            duration: .5,
        });
        gsap.to('.boards', {
            filter: 'blur(1px)',
            duration: .5
        });
        $all('.dashBoard').forEach(e => {
            gsap.to(e, {
                background: 'radial-gradient(#CED3DC66, transparent 70%)',
                duration: .5,
            })
        });
        $$('#customize3d').classList.add('bg3d');
        $$('.lightA').classList.remove('skewX');
        $$('.lightB').classList.remove('skew-X');
        $all('.digiBoard').forEach(e => e.classList.remove('skewX'));
        $all('.boardTitle').forEach(e => e.classList.remove('skewX'));
        $all('.boardSpan').forEach(e => e.classList.remove('skewX'));
        $$('.customizeControl').style.display = 'block';
        gsap.to('body', {
            background: '#12181E',
            duration: .5,
        })
    }
};
const rtl = (e, text) => {
    let tl = new gsap.timeline();
    tl.to(e, {
        borderRadius: 0,
        duration: .25,
    })
    tl.to(e, {
        width: 1,
        duration: .25,
    })
    tl.to(e, {
        innerText: text,
        duration: 0,
    })
    tl.to(e, {
        width: '10%',
        duration: .25,
    })
    tl.to(e, {
        borderRadius: '20px',
        duration: .25,
    })
}
const rotate = (e) => {
    if(CUS.controls.autoRotate){
        CUS.controls.autoRotate = false;
        rtl(e.target, 'Rotate');
    }else{
        CUS.controls.autoRotate = true;
        rtl(e.target, 'Pause');
    }
};
const spot = (e) => {
    let s = 3 - 3 / 100 * Number(e.target.value);
    CUS.spotLight1.intensity = s;
    CUS.spotLight2.intensity = s;
};
const direct = (e) => {
    let d = 3 / 100 * Number(e.target.value);
    CUS.directionalLight.intensity = d;
};
</script>

<template>
    <nav-component :custom="`#077AF9`"/>
    <section class="customize">
        <div class="loadBox">
            <div class="loadProgress"></div>
            <p class="loadNum">{{ CUS.modelLoading }}%</p>
        </div>
        <h2 class="customizeTitle" data-title="DISPLAY MODE">Custom</h2>
        <div class="secondTitle">
            <div class="paths">
                <p>Select</p>
                <p>{{ step[flow].text }}</p>
            </div>
            <div class="selectionAlpha">
                <p>Alpha</p>
                <input type="range" name="opacity" min="0" max="100" value="100" @input="selectionAlpha">
            </div>
        </div>
        <div class="mainCus">
            <dashBoardGroupComponent class="boards" :toggle-board="toggleBoard" :display-switch="displaySwitch"/>
            <canvas id="customize3d" class="customize3d bg3d"></canvas>
            <div class="displayControls" v-show="displayShow">
                <label for="lightA" class="lightA">
                    <p>Spot Light</p>
                    <input type="range" name="lightA" min="0" max="100" value="0" @input="spot">
                </label>
                <p class="rotate" @click="rotate">Pause</p>
                <label for="lightB" class="lightB">
                    <p>Directional Light</p>
                    <input type="range" name="lightB" min="0" max="100" value="0" @input="direct">
                </label>
            </div>
            <div class="customizeControl">
                <div v-for="i in droneModels" :key="i.id" class="bodySelect selection" v-show="step[1].show">
                    <div class="itemInfo" @click="toggleColor(i.id)">
                        <h6>{{ i.name }}</h6>
                        <p>Weight: {{ i.weight }}g</p>
                        <p>$ {{ i.price }}</p>
                    </div>
                    <div :class="`colorControls colorControls${i.id}`" v-if="toggleColorControl[i.id]">
                        <P>Color:</P>
                        <div :class="`colorControl bodyControl${i.id}${n.id}`" v-for="n in droneModels[`body0${i.id}`].color" :key="n.id" @click="bodyChoose(i.id, n.id, n.src)"></div>
                    </div>
                </div>
                <div v-for="e in propellorModels" :key="e.id" class="propellorSelect selection" v-show="step[2].show">
                    <div class="itemInfo" @click="toggleColor(e.id+3)">
                        <h6>{{ e.name }}</h6>
                        <p>Weight: {{ e.weight }}g</p>
                        <p>$ {{ e.price }}</p>
                    </div>
                    <div :class="`colorControls colorControls${e.id+3}`" v-if="toggleColorControl[e.id+3]">
                        <P>Color:</P>
                        <div :class="`colorControl propellorControl${e.id}${n.id}`" v-for="n in propellorModels[`propellor0${e.id}`].color" :key="n.id" @click="propellorChoose(e.id, n.id, n.src)"></div>
                    </div>
                </div>
                <div class="motorSelect selection" v-show="step[3].show">
                    <h3>Motor</h3>
                    <div class="motorControls funcControls">
                        <div :class="`motorControl${n.id} motorControl funcControl`" v-for="n in motorModels" :key="n.id" @click="motorChoose(n.id)">
                            <h6>{{ n.name }}</h6>
                            <p>Rotating speed: {{ n.rpm }}rpm</p>
                            <p>Torque: {{ n.kgm }}kgm</p>
                            <p>$ {{ n.price }}</p>
                        </div>
                    </div>
                </div>
                <div class="controllerSelect selection" v-show="step[4].show">
                    <h3>Controller</h3>
                    <div class="controllerControls funcControls">
                        <div :class="`controllerControl${n.id} controllerControl funcControl`" v-for="n in controllerModels" :key="n.id" @click="controllerChoose(n.id)">
                            <h6>{{ n.name }}</h6>
                            <p>kgmc: {{ n.kgmc }}</p>
                            <p>$ {{ n.price }}</p>
                        </div>
                    </div>
                </div>
                <div class="flowControls">
                    <div class="undo" data-title="Undo" v-show="step[flow].sBtn" @click="undo">
                        <span>Undo</span>
                    </div>
                    <div class="nextStep" data-title="Choose" v-show="step[flow].pBtn" @click="nextStep">
                        <span>Choose</span>
                    </div>
                    <div class="nextStep buyBtn" data-title="Buy" v-show="buyBtn" @click="addCart">
                        <span>Buy</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="lightBox" v-if="lightBoxShow">
        <div class="lightBoxContent">
			<div class="close" @click="lightBoxClose"></div>
            <h4 v-if="lightBoxText.title.show">{{ lightBoxText.title.content }}</h4>
            <div class="lightBoxImg" v-if="lightBoxText.img.show">
                <img v-if="lightBoxText.img.show" :src="introduction[lightBoxText.img.idt].img" alt="introduction">
            </div>
            <p v-if="lightBoxText.text.show">{{ lightBoxText.text.content }}</p>
            <div class="confirm" data-title="OK" v-if="lightBoxText.confirm" @click="reCart">
                <span>OK</span>
            </div>
            <div class="next" data-title="Next" v-if="lightBoxText.img.idt !== 7 && lightBoxText.img.show" @click="introductionFlow">
                <span>Next</span>
            </div>
            <div class="start" data-title="Start" v-if="lightBoxText.img.idt === 7 && lightBoxText.img.show" @click="lightBoxClose(true)">
                <span>Start</span>
            </div>
            <!-- <scroll-hint-component class="shc" v-if="lightBoxText.img.show"/> -->
		</div>
    </div>
    
    <footer-component />
</template>

<style lang="scss" scoped>
@import '@/sass/base/_color.scss';
@import '@/sass/base/_common.scss';
@import '@/sass/base/_font.scss';
@import '@/sass/mixin/_mixin.scss';
@import '@/sass/component/_btn.scss';
@import '@/sass/component/_lightBox.scss';
.mainCus{
    width: 100%;
    margin: 40px auto;
    position: relative;
    @include s($s-breakpoint) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    @include m($m-breakpoint) {
        max-width: 1200px;
        align-items: center;
    }
    .boards{
        position: absolute;
        top: 40px;
        left: -354px;
        z-index: 2;
    @include s($s-breakpoint) {
        left: -554px;
    }
    @include m($m-breakpoint) {
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: -1;
    }
}
input[type="range"]{
    cursor: pointer;
}
.displayControls{
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label{
        display: flex;
        width: 30%;
        border-top: 2px solid $light-black;
        p{
            margin: 0 20px;
        }
    }
    .rotate{
        width: 10%;
        cursor: pointer;
        overflow: hidden;
        color: #F25A2A;
        text-shadow: 0 0 10px #F25A2A88;
        border-radius: 20px;
        text-align: center;
        border-right: 2px solid #F25A2A;
        border-left: 2px solid #F25A2A;
    }
    .lightA{
        flex-direction: row-reverse;
        justify-content: start;
        border-right: 2px solid $light-black;
        border-top-right-radius: 20px;
        input[type="range"]::-webkit-slider-runnable-track{
            background: linear-gradient(to right, #eee, transparent);
        }
    }
    .lightB{
        justify-content: end;
        border-left: 2px solid $light-black;
        border-top-left-radius: 20px;
    }
    input[type="range"]{
        -webkit-appearance: none;
        background: transparent;
        margin: 0 10px;
    }
    input[type="range"]::-webkit-slider-thumb{
        -webkit-appearance: none;
        width: 3px;
        height: 22px;
        margin-top: -10px;
        background: #F25A2A;
        box-shadow: 0 0 10px 0 #F25A2A;
    }
    input[type="range"]::-webkit-slider-runnable-track{
        -webkit-appearance: none;
        width: 100%;
        height: 2px;
        background: linear-gradient(to left, #eee, transparent);
    }
}
}
.customize3d{
    margin: 0 auto 20px;
}
.bg3d{
    background: radial-gradient(#CED3DC33, transparent 70%);
}
.lightBox{
	@include lightBox();
    backdrop-filter: blur(5px);
	.lightBoxContent{
        padding: 20px;
        p{
            margin: 20px;
        }
        .lightBoxImg{
            width: 70%;
            height: 70%;
            margin: 20px auto 0;
            border-radius: 15px;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .confirm{
            @include primaryBtn(60px);
            margin: 20px 0 0 auto;
        }
        .next{
            @include secondBtn(60px);
            margin: 0 auto;
        }
        .start{
            @include primaryBtn(60px);
            margin: 0 auto;
        }
        .shc{
            position: absolute;
            top: 90%;
            left: 0;
            right: 0;
            margin: 0 auto;
        }
	}
}
.loadBox{
    width: 150px;
    height: 20px;
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    margin: 0 auto;
    border-radius: 15px;
    border: 2px solid $light-black;
    background: $black;
    display: none;
    @include m($m-breakpoint) {
        top: 40%;
        right: 40%;
        left: 0;
    }
    @include l($l-breakpoint) {
        top: 50%;
        width: 200px;
        height: 30px;
    }
    .loadProgress{
        width: 0%;
        height: 100%;
        border-radius: 15px;
        background: linear-gradient(to right, $blue, $purple);
    }
    .loadNum{
        text-align: center;
        position: absolute;
        top: 0;
        width: 100%;
    }
}

.customize{
    width: 100%;
    max-width: 1200px;
    position: relative;
    margin: 0 auto;
    padding-top: 80px;
    @include m($m-breakpoint) {
        
    }
    .customizeTitle{
        position: relative;
        z-index: 1;
        width: 90%;
        margin: 0 auto;
        text-align: left;
        @include l($l-breakpoint) {
            width: 1200px;
        }
    }
    .secondTitle{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        @include l($l-breakpoint) {
            width: 1200px;
        }
        .selectionAlpha{
            display: none;
            border-top: 2px solid $light-black;
            border-left: 2px solid $light-black;
            border-top-left-radius: 20px;
            transform: skewX(-15deg);
            
            @include m($m-breakpoint) {
                display: flex;
            }
            p{
                margin: 0 10px 0 20px;
            }
            input[type="range"]{
                -webkit-appearance: none;
                background: transparent;
                margin: 0 10px;
                cursor: pointer;
            }
            input[type="range"]::-webkit-slider-thumb{
                -webkit-appearance: none;
                width: 3px;
                height: 22px;
                margin-top: -10px;
                background: #F25A2A;
                box-shadow: 0 0 10px 0 #F25A2A;
            }
            input[type="range"]::-webkit-slider-runnable-track{
                -webkit-appearance: none;
                width: 100%;
                height: 2px;
                background: linear-gradient(to left, #eee, transparent);
            }
        }
    }
    
    .paths{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        p{
            text-align: center;
            width: 80px;
            @include m($m-breakpoint) {
                width: 100px;
            }
        }
        p:nth-child(2){
            text-align: left;
            width: 100px;
            animation: path 1s linear infinite;
        }
    }
}
@keyframes path {
    0%{color: #eee;}
    50%{color: $purple;}
    100%{color: #eee;}
}
.displayTitle{
    //text-shadow: 5px 0 0 #F25A2Aaa;
    &::after, &::before{
        content: attr(data-title);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        text-shadow: none;
    }
    &::before{
        color: #F25A2A66;
        animation: left10 .5s .5s linear forwards;
    }
    &::after{
        color: #F25A2Aaa;
        animation: left5 .5s .5s linear forwards;
    }
}
@keyframes left5 {
    0%{left: 0px}
    100%{left: 5px}
}
@keyframes left10 {
    0%{left: 0px}
    100%{left: 10px}
}
@keyframes skewX {
    0%{transform: none;}
    100%{transform: perspective(500px) skewX(15deg) rotateY(10deg);}
}
@keyframes skew-X {
    0%{transform: none;}
    100%{transform: perspective(500px) skewX(-15deg) rotateY(-10deg);}
}
.skewX{
    animation: skewX .5s .5s linear forwards;
}
.skew-X{
    animation: skew-X .5s .5s linear forwards;
}
@keyframes op {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
.op{
    animation: op .5s linear forwards;
}
.customizeControl{
    box-sizing: border-box;
    padding: 30px 0;
    margin: 0 auto;
    border-radius: 20px;
    border: 2px solid $grey;
    background: $black;
    width: 90%;
    @include s($s-breakpoint) {
        width: 575px;
        background: #25242499;
    }
    @include m($m-breakpoint) {
        width: 400px;
    }
    .selection{
        width: 90%;
        margin: 0 auto 40px;
        position: relative;
        cursor: pointer;
        .itemInfo{
            position: relative;
            z-index: 1;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 15px;
            border-radius: 15px;
            background: linear-gradient(to right, $purple, $blue);
            h6{
                width: 100%;
            }
            p:nth-child(2){
                width: 70%;
            }
            p:nth-child(3){
                width: 30%;
                text-align: right;
            }
        }
        .funcControls{
            margin: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            .funcControl{
                cursor: pointer;
                border: 2px solid $dark-grey;
                padding: 10px;
                border-radius: 20px;
                margin: 10px 40px;
                display: flex;
                flex-wrap: wrap;
                h4{
                    width: 100%;
                }
                p{
                    width: 100%;
                }
                @include m($m-breakpoint) {
                    margin: 10px 0;
                }
            }
            .motorControl p:nth-child(3){
                @include s($s-breakpoint) {
                    width: 50%;
                }
            }
            .motorControl p:nth-child(4){
                @include s($s-breakpoint) {
                    width: 50%;
                    text-align: right;
                }
            }
            .controllerControl p:nth-child(2){
                @include s($s-breakpoint) {
                    width: 50%;
                }
            }
            .controllerControl p:nth-child(3){
                @include s($s-breakpoint) {
                    width: 50%;
                    text-align: right;
                }
            }
        }
    }
}

.colorControls{
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    transition: all .3s;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 0 0 15px 15px;
    background: $black;
    border-bottom: 2px solid $light-black;
    border-left: 2px solid $light-black;
    border-right: 2px solid $light-black;
    p{
        width: 100%;
    }
    .colorControl{
        border-radius: 50%;
        border: 2px solid #fff;
        width: 20px;
        height: 20px;
        margin: 10px auto;
        background: #fff;
        cursor: pointer;
    }
    .colorControl:nth-child(2){
        background: black;
    }
    .colorControl:nth-child(3){
        background: blue;
    }
    .colorControl:nth-child(4){
        background: green;
    }
    .colorControl:nth-child(5){
        background: red;
    }
    .colorControl:nth-child(6){
        background: white;
    }
}
.chosen{
    box-shadow: 0 0 0 5px $ored;
    transition: all .3s;
}
.flowControls{
    display: flex;
    justify-content: space-around;
    .undo{
        @include secondBtn(60px);
    }
    .nextStep{
        @include primaryBtn(100px);
    }
    .buyBtn{
        @include primaryBtn(100px);
    }
}

</style>