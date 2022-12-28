<script setup>
import { ref, onMounted } from "vue";
import $ from "jquery";
onMounted(() => {
  $(".List-item>a").parent().siblings().find("ul").hide();
  $(".List-item>a").click(function (e) {
    e.preventDefault();
    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
    // $(this).parent().siblings().find('a').removeClass('rmminus');
    // $(this).toggleClass('rmminus');
  });
});
const sidenav = ref({
  account: {
    title: "Account",
    list: {
      a: {
        cn: "Profile Overview",
        path: "/profile",
      },
    },
  },
  order: {
    title: "Orders",
    list: {
      a: {
        cn: "Normal Orders",
        path: "/NormalOrders",
      },
      b: {
        cn: "Customized Orders",
        path: "/CustomizedOrders",
      },
    },
  },
  racing: {
    title: "Racing",
    list: {
      a: {
        cn: "My Racing",
        path: "/racing",
      },
    },
  },
  person: {
    title: "Personal Setting",
    list: {
      a: {
        cn: "Payment",
        path: "/payment",
      },
    },
  },
});
</script>
<template>
  <nav class="sidenav">
    <li class="List-item" v-for="item in sidenav" :key="item">
      <a href="">{{ item.title }}</a>
      <ul class="subitem">
        <li class="" v-for="i in item.list" :key="i">
          <router-link :to="i.path">{{ i.cn }}</router-link>
        </li>
      </ul>
    </li>
  </nav>
</template>
<style scoped lang="scss">
@import "@/sass/style.scss";
.sidenav {
  // display: none;
  width: 25%;
  height: fit-content;
  background-color: #1c2023;
  padding: 20px;
  border-radius: 10px;
  .List-item {
    padding: 5px 15px;
    a {
      font-size: 15px;
    }
    .subitem {
      padding: 10px 0 10px 20px;
      li {
        margin: 10px 0;
        a {
          font-size: 20px;
          color: rgb(90, 131, 255);
          &:hover {
            color: rgb(255, 162, 0);
          }
        }
      }
    }
  }
}
</style>
