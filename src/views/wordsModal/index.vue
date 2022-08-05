<template>
  <div>
    <el-input v-model="inputValue" style="width:30%;" @keyup.enter="checkWrod"></el-input>
    <p style="font-size: 14px; color: red;" v-if="showNotice">单词输入错误</p>
    <p v-if="showNotice">{{showWord.word}}</p>
    <p>{{showWord.mean}}</p>
  </div>
</template>

<script>
import dictionary from '@/config/keysWords'
export default {
  data () {
    return {
      inputValue: '', // 输入框值
      showWord: {}, // 随机单词
      showNotice: false, // 错误提示
      wordArr: [], // 词库
      meanArr: [], // 词库
    }
  },
  created () {
    let {word, mean} = dictionary;
    this.wordArr = word;
    this.meanArr = mean;
    this.getWord();
  },
  methods: {
    getNum () {
      const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
      return random(0, this.wordArr.length - 1);
    },
    checkWrod() {
      let {inputValue, showWord} = this;
      if (inputValue == showWord.word) {
        this.getWord();
        this.inputValue = '';
      } else {
        this.showNoticeContorl();
      }
    },
    showNoticeContorl() {
      this.showNotice = true;
      setTimeout(() => {
        this.showNotice = false;
      }, 1000);
    },
    getWord() {
      let {wordArr, meanArr} = this;
      let num = this.getNum()
      this.showWord = {
        word: wordArr[num],
        mean: meanArr[num]
      }
    },
  },
}
</script>

<style scoped>
</style>