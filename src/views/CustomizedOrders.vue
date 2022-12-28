<script setup>
// import headerComponentsVue from '@/components/headerComponents.vue';
import navComponentsVue from '@/components/navComponents.vue';
import footerComponentsVue from '@/components/footerComponents.vue';
import menuVue from '@/components/memberCenter/menu.vue';
import memberCardVue from '@/components/memberCenter/memberCard.vue';
import memberLevelVue from '@/components/memberCenter/memberLevel.vue';
import { log, $$, $all, getw, BIND_URL }from "../composables/useCommon" ;
import $ from 'jquery';
import {BIND_URL } from "../composables/useCommon";
import { ref, onMounted } from 'vue';

onMounted(()=> {getMemberCmitem();});
const  cmorders = ref('');
const getMemberCmitem = ()=>{
    fetch(`${BIND_URL('getMemCmorder.php','g5PHP')}`,{
        method: "get",
    }).then(res=>{
        return res.json();
    }).then(mem=>{
        console.log(mem);
        // if(mem[])
        cmorders.value = mem;

        console.log(cmorders.value)    
    })
}

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
                <h1>Custom Orders</h1>
                <table v-for="(item,index) in cmorders" :key="index">
                    <thead>
                        <th>Order No.</th>
                        <th>Date</th>
                        <th>Total Price</th>
                        <th>Status</th>
                        <th>Member No.</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{cmorders[index].orders_no}}</td>
                            <td>{{cmorders[index].purchase_date}}</td>
                            <td>{{cmorders[index].total}}</td>
                            <td>{{cmorders[index].orders_status}}</td>
                            <td>{{cmorders[index].mem_acc}}</td>
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
header{
    top: 0;
}
section{
    margin: 0;
}
table{
    text-align: center;
    width: 100%;
    margin: 30px auto;
}
input{
    display: block;
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
    cursor: pointer;
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
    color: $text-color;
    .sidenav{
        width: 100%;
        box-sizing: border-box;
    }
    .maincontent{
        width: 100%;
        margin: 0;
        .maininfo{
            display: flex;
            flex-direction: column;
            width: 100%;
            .meminfo{
                aspect-ratio: 16/9;
            }
            .memgrade{
                aspect-ratio: 16/9;
            }
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
        .sidenav{
            display: block;
        }
        .maincontent{
            .profiles-list{
                padding: 50px;
            }
            .maininfo{
                display: grid;
                grid-template-columns: repeat(2,1fr);
                gap: 10px;
                .meminfo{
                    aspect-ratio: 0;
                }
                .memgrade{
                    aspect-ratio: 0;
                }
            }
        }
    }
}
@include m($m-breakpoint) {//>1023px
    .main{
        display: flex;
        .sidenav{
            width: 30%;
        }
        .maincontent{
            width: 70%;
            .profiles-list{
                padding: 70px 50px;
            }
        }
    }
}  


</style>