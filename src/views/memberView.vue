<script setup>
import { onMounted, registerRuntimeCompiler,ref } from "vue";
import navComponentsVue from "@/components/navComponents.vue";
import footerComponentsVue from "@/components/footerComponents.vue";
import { bodyInit } from "../composables/useOnunmounted";
import memberCardVue from '@/components/memberCenter/memberCard.vue';
bodyInit();
// const meminfo = ref("");
onMounted(() =>{
  function getMemberInfoSS(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                let member = JSON.parse(xhr.responseText);
                // console.log("SS:"+member);
                if(member.Account){//有帳密資料
                    // $id("memName").innerText = member.memName;
                    // $id("spanLogin").innerText = "登出"; 
                // meminfo.value = [member.memName,member.email];
                // console.log(mem.value)         
                }else{
                  alert("Please log in first!");
                  // location.href="http://localhost:8888/dist/home";
                  window.history.back();
                }
            }
            xhr.open("get","/dist/g5PHP/getMemberInfo.php",true);//查看使用者是否有登入
            xhr.send(null);
        }
  
  getMemberInfoSS();

})



</script>

<template>
	<navComponentsVue />
	<section class="member">
		<div class="member_box">
			<div class="member_top">
				<memberCardVue/>
				<div class="member_drone">
					<img src="../assets/images/member/mem_drone02.png" alt="drone" />
					<div class="drone_word">
						<h3>FPV Name </h3>
						<router-link class="drone_more" to="/machineView"
						><button>Leam more</button></router-link
						>
					</div>
				</div>
			</div>
			<div class="mem_down">
				<div class="round_item">
					<router-link class="anchor" to="/profile">PROFILE</router-link>
				</div>
				<div class="round_item">
					<router-link class="anchor" to="/NormalOrders">NORMAL ORDERS</router-link>
				</div>
				<div class="round_item">
					<router-link class="anchor" to="/CustomizedOrders">CUSTOM ORDERS</router-link>
				</div>
				<div class="round_item">
					<router-link class="anchor" to="/racing">RACING</router-link>
				</div>
			</div>
		</div>
	</section>
	<footerComponentsVue />
</template>

<style lang="scss" scoped>
@import "@/sass/style.scss";

section {
	margin-top: 0;
}
.member {//手機版
	width: 100%;
	padding-top: 100px;
	cursor: pointer;
	.member_box {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		.member_top {
			
			.member_drone{
				box-sizing: border-box;
				height: 100%;
				text-align: center;
				padding: 20px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				img{
					width: 100%;
					max-width: 400px;
					margin: 0 auto;
					flex-grow: 1;
				}
				.drone_word{
					display: flex;
					justify-content: space-around;
					h3{
						font-size: 30px;
					}
					.drone_more{

					}
					button{
						width: 120px;
						height: 35px;
						font-size: 15px;
						margin-top: 5px;
						cursor: pointer;
						border: 1px solid #fff;
						border-radius: 5px;
						color: #fff;
						font-family: "Poppins", sans-serif;
						background-color: transparent;
						transition: 0.5s ease-in;
						&:hover {
							background: rgb(64, 64, 223);
						}

					}
				}
			}
		}
		
		
	}
	
	.mem_down{
		box-sizing: border-box;
		margin: 30px 0;
		padding: 10px;
		display: grid;
		grid-template-columns: repeat(2,1fr);
		grid-gap: 40px;
		.round_item{
			// width: 100%;
			// height: 100%;
			aspect-ratio: 1/1;
			border-radius: 50%;
			opacity: 0.9;
			background: #3b61c0;
			display: flex;
			align-items: center;
			justify-content: center;
			&:hover {
				opacity: 1;
				background: linear-gradient(119.47deg, rgba(20, 134, 239, 0.56) 24.7%, rgba(219, 0, 255, 0.56) 77.81%);
			}
			a{
				font-size: 25px;
			}
		}
	}

}
.meminfo{
		border: 1px solid rgb(255, 0, 0);
		aspect-ratio: 18/9;
		margin: 0;
		border-radius: 0;
		box-sizing: border-box;
	}

			

			
		
@include m($m-breakpoint) {//手機到平板
	.member{
		.member_box{
			.member_top{
				align-items: center;
				display: grid;
				grid-template-columns: repeat(2,1fr);
				.meminfo{
					aspect-ratio: 18/9;
					margin: 20px;
					border: 1px solid white;
					border-radius: 20px;
					
				}
				
			}
		}
		.mem_down{
			box-sizing: border-box;
			margin: 30px 0;
			padding: 10px;
			display: grid;
			grid-template-columns: repeat(4,1fr);
			grid-gap: 60px;
			.round_item{
				width: 100%;
				height: 100%;
				aspect-ratio: 1/1;
				border-radius: 50%;
				opacity: 0.9;
				background: #3b61c0;
				display: flex;
				align-items: center;
				justify-content: center;
				&:hover {
				opacity: 1;
				background: linear-gradient(119.47deg, rgba(20, 134, 239, 0.56) 24.7%, rgba(219, 0, 255, 0.56) 77.81%);
			}
				a{
					font-size: 25px;
				}
			}
		}
	}
		
	
}
@include l($l-breakpoint) {//平板以上電腦
	.member{
		.member_box{
			.member_top{
				.meminfo{
					aspect-ratio: 18/9;
					margin: 20px;
					border: 1px solid white;
					border-radius: 20px;
				}
				.member_card {
					height: 250px;
				}
				
			}
			.mem_down{
				box-sizing: border-box;
				margin: 30px 0;
				padding: 10px;
				display: grid;
				grid-template-columns: repeat(4,1fr);
				grid-gap: 60px;
				.round_item{
					width: 100%;
					height: 100%;
					aspect-ratio: 1/1;
					border-radius: 50%;
					opacity: 0.9;
					background: #3b61c0;
					display: flex;
					align-items: center;
					justify-content: center;
					&:hover {
					opacity: 1;
					background: linear-gradient(119.47deg, rgba(20, 134, 239, 0.56) 24.7%, rgba(219, 0, 255, 0.56) 77.81%);
				}
					a{
						font-size: 25px;
					}
				}
			}

		}
	}

	
	
	
	
}



</style>
