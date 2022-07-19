<template>
  <div class="calc_box">
    <div class="result_box">{{result_value}}</div>
    <div class="calc_button">
      <button v-for="(item, i) in button_arr" :key="i" @click="keyDown(item)">{{item}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result_value: '0',
        button_arr: ['CE', 'C', '<=', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '+/-', '0', '.', '='],
        f_num: '',
        s_num: '',
        operator: '',
      }
    },
    methods: {
      // 识别
      keyDown(item) {
        const num_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        if (num_arr.includes(item)) {
          this.numberClick(item)
        } else {
          this.operatorClick(item)
        }
      },
      numberClick(item) {
        this.setResult(item) // 展示值
        this.setNum(item) // 保存值
      },
      setResult(item) {
        let {result_value, operator} = this
        console.log(operator)
        if (result_value != '0') {
          this.result_value = result_value + item
        } else {
          this.result_value = item == '0' ? '0' : item
        }
      },
      setNum() {
        let {f_num, operator, s_num, result_value, _clearConnect} = this
        if (!f_num || !operator) {
          this.f_num = _clearConnect(result_value)
        } else {
          this.s_num = _clearConnect(result_value)
        }
        if (s_num) {console.log()}
        console.log(this.f_num, 'f_num')
        console.log(this.s_num, 's_num')
      },
      // 特殊字符识别
      operatorClick(item) {
        switch (item) {
          case 'C':
            this.clearResult()
            break;
          case 'CE':
            this.clearAll()
            break
          case '=':
            this.calculation()
            break
          case '<=':
            this.splitResult()
            break
          default:
            this.setOperator(item)
            break;
        }
      },
      clearResult() {
        this.result_value = '0'
      },
      clearAll() {
        this.result_value = '0'
        this.f_num = ''
        this.s_num = ''
      },
      setOperator(item) {
        if (this.operator != item) {
          this.operator = item
        }
      },
      // 计算
      calculation() {
        let {operator, opearAdd, opearReduce, opearRide, opearDivision} = this
        if (operator) {
          switch (operator) {
            case '+':
              this.result_value = opearAdd()
              break;
            case '-':
              this.result_value = opearReduce()
              break;
            case '×':
              this.result_value = opearRide()
              break;
            case '÷':
              this.result_value = opearDivision()
              break;
          }
        } else {
          return
        }
      },
      _clearConnect(data) {
        return JSON.parse(JSON.stringify(data))
      },
      splitResult() {
        let {result_value} = this
        this.result_value = result_value.length == 1 ? '0' : result_value.slice(0,-1)
        this.setNum()
      },
      opearAdd() {
        let {f_num, s_num} = this
        return Number(f_num) + Number(s_num)
      },
      opearReduce() {
        let {f_num, s_num} = this
        return Number(f_num) - Number(s_num)
      },
      opearRide() {
        let {f_num, s_num} = this
        return Number(f_num) * Number(s_num)
      },
      opearDivision() {
        let {f_num, s_num} = this
        return Number(f_num) / Number(s_num)
      },
    }
  }
</script>

<style scoped>
.calc_box {
  width: 1000px;
}
.calc_button {
  height: 500px;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(5, 20%);
}
.result_box {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  padding-right: 5px;
  border: 1px solid black;
  border-bottom: none;
  text-align: right;
}
</style>