<template>
  <div>
    <div class="menu">
      <el-button v-for="(item, i) in menuList.erp" :key="i">{{item.menuName}}</el-button>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import menuList from '@/config/erpMenu'
  export default {
    data() {
      return {
        menuList
      }
    },
  }
</script>

<style scoped>

</style>