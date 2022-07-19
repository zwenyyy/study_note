<template>
  <div>
    <p class="import_text">
      (1) 引入方式 (2) 初始化语句 (3) elementUi => ElementPlus
    </p>
    <p>import { createApp } from 'vue';</p>
    <p>import App from './App.vue';</p>
    <p>import ElementPlus from 'element-plus'</p>
    <p>createApp(App).use(store).use(router).use(ElementPlus).mount('#app')</p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>