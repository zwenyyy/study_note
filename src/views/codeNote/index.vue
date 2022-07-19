<template>
  <div class="note_mission_board">
    <div class="note_class_box" v-for="(noteClass, i) in noteData" :key="i">
      <div class="title">{{noteClass.title}}</div>
      <div class="note_class_button_box">
        <el-button type="primary" v-for="(item, o) in noteClass.noteMenu" :key="o" @click="toPage(item)">{{item.title}}</el-button>
      </div>
    </div>
    <!-- 笔记展示 -->
    <el-dialog :title="title" v-model="visible" width="550px" append-to-body :before-close="handleClose"
      :close-on-click-modal="canCloseModel">
      <router-view></router-view>
    </el-dialog>
  </div>
</template>

<script>
import noteConfig from '@/config/cssConfig'
export default {
  mixins: [noteConfig],
  data () {
    return {
      visible: false,
      canCloseModel: false, //点击遮罩是否可以关闭
      title: ''
    }
  },
  methods: {
    toPage (item) {
      this.openModal()
      this.title = item.title;
      this.$router.push(item.url)
    },
    openModal() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
  },
}
</script>

<style scoped>
.note_mission_board {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.note_class_box {
  width: 500px;
  min-height: 500px;
  background: gray;
  padding: 5px 10px;
  border-radius: 5px;
}
.note_class_button_box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.title {
  color: white;
}
</style>