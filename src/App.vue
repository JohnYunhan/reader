<template>
  <div class="app">
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="bookcity">书城</router-link>
      </div>
      <div class="tab-item">
        <router-link to="bookrack">书架</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass">
@import "app.scss";
</style>
