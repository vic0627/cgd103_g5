<script setup></script>

<template>
  <nav>
    <router-link class="anchor" to="/">Home</router-link>
    <router-link class="anchor" to="/about">About</router-link>
    <router-link class="anchor" to="/news">News</router-link>
    <router-link class="anchor" to="/shop">Shop</router-link>
    <router-link class="anchor" to="/shop/shopInfo">shopInfo</router-link>
    <router-link class="anchor" to="/cart">Cart</router-link>
    <router-link class="anchor" to="/game">Game</router-link>
    <router-link class="anchor" to="/custom">Custom</router-link>
    <router-link class="anchor" to="/showcase">Showcase</router-link>
    <router-link class="anchor" to="/race">Race</router-link>
    <router-link class="anchor" to="/member">Member</router-link>
    <router-link class="anchor" to="/signin">signin</router-link>
    <router-link class="anchor" to="/register">register</router-link>
    <router-link class="anchor" to="/profile">profile</router-link>
    <router-link class="anchor" to="/CustomizedOrders">CustomizedOrders</router-link>
    <router-link class="anchor" to="/NormalOrders">NormalOrders</router-link>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  // height: 60px;
  background: #000;
  .anchor {
    color: #fff;
    display: inline-block;
    margin: 10px;
  }
}
</style>
