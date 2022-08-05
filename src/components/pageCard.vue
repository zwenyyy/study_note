<template>
  <div class="page_card">
    <el-tabs :value="$route.meta.name" type="border-card" closable @tab-remove="removeTab" @tab-click="tabClick">
      <el-tab-pane v-for="item in tabList" :key="item.name" :label="item.title" :name="item.name"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  methods: {
    removeTab () {

    },
    tabClick () {

    }
  }
}
</script>

<style scoped>
</style>