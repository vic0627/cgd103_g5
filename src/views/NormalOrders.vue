<script setup>
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
// import $ from 'jquery';
import { ref, onMounted,reactive,computed,watch } from 'vue';

onMounted(()=> {});

</script>

<template>
    <navComponentsVue />
    <div class="main">
        <menuVue />
        <div class="maincontent">
            <section class="maininfo">
                <memberCardVue/>
                <memberLevelVue/>
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
$text-color:#fff;
$link-color:#7abcff;
$btn-color:#007FFB;
$bg-color:rgb(54, 54, 54);

//table樣式
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
//

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
    color: $text-color;
    
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
           display: block;
        }
        .profiles-list{
            width: 100%;
            margin:10px 0;
            background-color: #333;
            border-radius: 10px;
            padding: 20px;
            box-sizing: border-box;
        }
    }
}

@include s($s-breakpoint) {//>575px
    .main{
        padding: 10px;
        .sidenav{
            display: block;
        }
        .maincontent{
            width: 75%;
            .profiles-list{
                padding: 50px;
            }
            .maininfo{
                // display: flex;
                display: grid;
                grid-template-columns: repeat(2,1fr);
                grid-gap: 10px;
            }
        }
    }
}
@include m($m-breakpoint) {//>1023px
    .main{
        .maincontent{
            .profiles-list{
                padding: 70px 100px;
            }
        }
    }
}  
@include l($l-breakpoint) {//>1199px
    
} 
</style>