import { computed, onMounted, reactive, ref } from 'vue';

import img01 from "../assets/images/news/img_05.jpg";
import img02 from "../assets/images/news/img_06.jpg";
import img03 from "../assets/images/news/img_07.jpg";
import img04 from "../assets/images/news/img_08.jpg";
import img05 from "../assets/images/news/img_09.jpg";
import img06 from "../assets/images/news/img_12.jpg";
import img07 from "../assets/images/news/news_01.jpg";
import img08 from "../assets/images/news/news_02.jpg";
import img09 from "../assets/images/news/news_03.jpg";
import img10 from "../assets/images/news/news_04.jpg";
import img11 from "../assets/images/news/news_05.jpg";
import img12 from "../assets/images/news/news_06.jpg";
import img13 from "../assets/images/news/news_07.jpg";
import img14 from "../assets/images/news/news_08.jpg";
import img15 from "../assets/images/news/news_09.jpg";
import img16 from "../assets/images/news/news_10.jpg";
import img17 from "../assets/images/news/news_11.jpg";
import img18 from "../assets/images/news/news_12.jpg";
import img19 from "../assets/images/news/news_13.jpg";
const lastNews = reactive([
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "SkyPixel 8th style free ",
        "src": img01,
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "src": img02,
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "src": img03,
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Mens Cotton Jacket",
        "src": img04,
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Sol Gold Petite Micropave",
        "src": img05,
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "White Gold Plated Princess",
        "src": img06,
    },
    //-------------------
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Peak District cloud inversion leaves drone pilot speechless",
        "src": img07,
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Drone footage shows deadly Brazil flooding",
        "src": img08,
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Drones to track Walsall's off-road bikers",
        "src": img09,
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "Frequently Asked Questions About Time Travel",
        "src": img10,
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "UK drone pilots have 25 days to register with regulator",
        "src": img11,
    },
    {
        "id": 1,
        "tagName": "Travel",
        "title": "A quintessentially Irish way to travel",
        "src": img12,
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Frank Lampard photoshop used to promote New York park",
        "src": img13,
    },
    {
        "id": 2,
        "tagName": "FPV",
        "title": "Drone racing: How it works",
        "src": img14,
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Adobe Voco 'Photoshop-for-voice' causes concern",
        "src": img15,
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "Adult social care reform, Energy credit balances, Revolut fraud victims",
        "src": img16,
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Tones, Drones and Arpeggios: The Magic of Minimalism",
        "src": img17,
    },
    {
        "id": 3,
        "tagName": "Photoshop",
        "title": "Why mourners are opting to scatter ashes by drone",
        "src": img18,
    },
    {
        "id": 4,
        "tagName": "Customed",
        "title": "RealityCapture. Create 3D maps and models from drone images. Fast. Accurate. Simple.",
        "src": img19,
    },
])

export default lastNews;

