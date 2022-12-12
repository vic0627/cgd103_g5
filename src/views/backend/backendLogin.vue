<script>
import { ref, onMounted, reactive } from 'vue';

import { log } from '../../composables/useCommon';




</script>

<template>
   <div class="container">
        <div class="box">
            <form action="">
                <div class="form-group">
                    <label for="">帳號</label>
                    <input type="text" id="userName" name="userName" required maxlength="10">
                </div>
                <div class="form-group">
                    <label for="">密碼</label>
                    <input type="password" id="psw" name="psw" class="psw" required maxlength="10">
                    <p class="message">請輸入6~10位密碼驗證</p>
                </div>
                <button type="submit" class="btn" @click="removeCookie">登入</button>
            </form>
            <div class="links">
                <router-link to="/" class="leave link" >離開後台</router-link>
                <router-link to="/" class="home link" >前往首頁</router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100vh;
    background-color: #5E8CA7;
    .box{
        width: 500px;
        padding: 20px;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
    }
}
p{
    color: #000;
}

// h3{
//     display: inline;
//     font-size: 25px;
//     color: #5E8CA7;
// }
// .accountbox,.passwordbox{
//     text-align: center;
// }
.btn{
    width: 100%;
    text-align: center;
    border-radius: 5px;
    background-color: #5E8CA7;
    color: #fff;
    cursor: pointer;
    padding: 8px;
    height: 40px;
    font-size: 20px;
    margin-top: 15px;
    border: none;
    line-height: 25px;
    transition: background 0.5s;
    &:hover{
        background: #06519d;
    }
}
.links{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
}

.link{
    color: #5E8CA7;
    font-size: 22px;
    margin: 10px 0;
    padding: 5px;
    transition: background 0.5s;
    &:hover{
        background: #fff;
        color: #1671cd;
        border-radius: 5px;
       
    }
}
input{
    width: 95%;
    height: 20px;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: 1px solid rgb(140, 140, 140);
    border-radius: 5px;
    &:focus{
        color: #06519d;
        border: 1px solid #1671cd;
        outline: none;
        &::placeholder{
          opacity: 0;
        }
    }
    &::placeholder{
        padding-left: 5px;
        color: rgba(181, 181, 181, 0.749);
    }
}
// h2{
//     font-size: 25px;
//     color: #5E8CA7;
//     text-align: center;
//     margin: 10px;
// }


</style>