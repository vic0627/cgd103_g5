<script>
import { onMounted, registerRuntimeCompiler } from 'vue';

</script>

<template>
   <div class="login">
        <div class="box">
            <h2>管理員登入</h2>
            <div class="accountbox">
                <h3>帳號</h3>
                <input type="text" placeholder="請輸入管理員帳號" name="num" id="number">   
            </div>
            <div class="passwordbox">
                <h3>密碼</h3>
                <input type="text" placeholder="請輸入管理員密碼" name="num" id="number">
            </div>
            <div class="btn">
                <input type="submit" value="登入">
            </div>
            <div class="link">
                <router-link class="anchor" to="/">↼ 離開後台</router-link>
                <router-link class="anchor" to="/home">⇀ 前往首頁</router-link>
            </div>
        </div>

   </div>
</template>
<style lang="scss" scoped>
.login{
    width: 100%;
    height: 100vh;
    background-color: #5E8CA7;
    .box{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 500px;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;
        margin: auto;
        transform: translate(-50%,-50%);
    }
}
h3{
    display: inline;
    font-size: 25px;
    color: #5E8CA7;
}
.accountbox,.passwordbox{
    text-align: center;
}
.btn{
    text-align: center;
    input{
        border-radius: 5px;
        background-color: #5E8CA7;
        color: #fff;
        cursor: pointer;
        padding: 8px;
        height: 40px;
        font-size: 20px;
        border: none;
        line-height: 25px;
        transition: background 0.5s;
        &:hover{
            background: #06519d;
        }
    }
}
.link{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .anchor{
        font-size: 22px;
        margin: 10px 0;
        padding: 5px;
        transition: background 0.5s;
        &:hover{
            background: #fff;
            color: #5E8CA7;
            border-radius: 5px;
            padding: 5px;
        }
    }
}
input{
    width: 320px;
    height: 30px;
    margin-top: 10px;
    padding-left: 10px;
    margin-left: 10px;
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
h2{
    font-size: 25px;
    color: #5E8CA7;
    text-align: center;
    margin: 10px;
}


</style>