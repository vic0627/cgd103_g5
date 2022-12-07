<script setup>
// import headerComponentsVue from '@/components/headerComponents.vue';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import $ from 'jquery';
import { ref, onMounted } from 'vue';

onMounted(()=> {
    $('.List-item>a').parent().siblings().find('ul').hide();
    $('.List-item>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
        // $(this).parent().siblings().find('a').removeClass('rmminus');
        // $(this).toggleClass('rmminus');
    });
})

const sidenav = ref({
    account :{
        title : "Account",
        list : ["Profile Overview"],
    },
    order :{
        title : "Orders",
        list : ["Normal Orders","Customized Orders"],
    },
    racing :{
        title : "Racing",
        list : ["My Racing"],
    },
    person :{
        title : "Personal Setting",
        list : ["Payment"],
    }
});


</script>

<template>
    <navComponentsVue />
    <div class="main">
        <nav class="sidenav" >
            <li class="List-item" v-for="item in sidenav" :key="item">
                <a href="">{{item.title}}</a>
                <ul class="subitem">
                    <li class=""  v-for="i in item.list" :key="i" >{{i}}</li>
                </ul>
            </li>
        </nav>
        <div class="maincontent">
            <section class="maininfo">
                <div class="meminfo"></div>
                <div class="memgrade"></div>
            </section>
            <section class="profiles-list">
                <h1>Normal Orders</h1>
                <table>
                    <thead>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Tracing No.</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><router-link to=""><span>20221201001</span></router-link></td>
                            <td>2022-12-01</td>
                            <td>USD $899.9</td>
                            <td>Preparing</td>
                            <td>4756382</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Tracing No.</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><router-link to=""><span>20221201001</span></router-link></td>
                            <td>2022-12-01</td>
                            <td>USD $899.9</td>
                            <td>Preparing</td>
                            <td>4756382</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Tracing No.</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><router-link to=""><span>20221201001</span></router-link></td>
                            <td>2022-12-01</td>
                            <td>USD $899.9</td>
                            <td>Preparing</td>
                            <td>4756382</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Tracing No.</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td><router-link to=""><span>20221201001</span></router-link></td>
                            <td>2022-12-01</td>
                            <td>USD $899.9</td>
                            <td>Preparing</td>
                            <td>4756382</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
    <footerComponentsVue />
</template>


<style scoped lang="scss">
@import '@/sass/style.scss';
header{
    top: 0;
}
table{
    text-align: center;
    width: 100%;
    margin: 30px auto;
}
tr{
    border-top: 1px solid #777;
}
th{
    background: #bbb;
    padding: 20px;
}
td{
    vertical-align: middle;
    background: #fff;
}
td{
    height: 80px;
}
tr:hover{
    background: #333;
}
table thead th:first-child {
  border-radius: 10px 0 0 0;
}
table thead th:last-child {
  border-radius: 0 10px 0 0;
}
table tbody tr:last-child td:first-child {
  border-radius: 0 0 0 10px;
}
table tbody tr:last-child td:last-child {
  border-radius: 0 0 10px 0;
}

span{
    color: rgb(43, 223, 255);
}
section{
    margin: 0;
}
input{
    display: block;
}
.main{
    max-width: 1200px;
    width: 100%;
    margin: 90px auto;
    display: flex;
    justify-content: start;
    gap: 10px;
    .sidenav{
        width: 25%;
        height: fit-content;
        background-color: #1C2023;
        padding: 20px;
        border-radius: 10px;
        .List-item{
            padding: 10px;
            a{
                font-size: 15px;
            }
            .subitem{
                // display: none;
                padding: 10px 0 10px 20px;
            }
        }
    }
    .maincontent{
        width: 75%;
        margin: 0;
        .maininfo{
            display: flex;
            gap: 10px;
            .meminfo{
                width: 500px;
                aspect-ratio: 16/9;
                // background-image: linear-gradient(135deg, rgb(156, 114, 15), gold);
                // background: linear-gradient(-200deg, #f9f48f, #fbc65d, #e8b443, #e4b445);
                background: linear-gradient(-200deg, #E6BA79 0.51%, rgba(173, 99, 12, 0.83) 98.54%);
                border-radius: 10px;
            }
            .memgrade{
                flex-grow: 1;
                height: auto;
                background-color: #616574;
                border-radius: 10px;
            }
        }
        .profiles-list{
            width: 100%;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            border: 1px solid #333;
            padding: 70px 30px;
            box-sizing: border-box;
        }
    }
}
</style>