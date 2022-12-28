export const log = e => console.log(e);

export const $$ = e => document.querySelector(e);

export const $all = e => document.querySelectorAll(e);

export const getW = e => Number(window.getComputedStyle($$(e),null).getPropertyValue("width").split('px')[0])/2;

export const getCartLength = () => {
    let cartItem = sessionStorage["cartList"];
    let cartLength = [];
    if(cartItem != undefined){
        cartLength = cartItem.split(",");
    }
    return cartLength.length;
};
export const BIND_URL = (url, path = 'assets') => `http://localhost/dist/${path}/${url}`;