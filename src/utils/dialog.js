/* eslint-disable */

import { createApp } from 'vue'
const app = createApp({})
app.directive('dialogDrag', {
  bind(el, binding, vnode, oldVnode) {
    //弹框可拉伸最小宽高
    let minWidth = 400
    let minHeight = 300

    let isFullScreen = false //初始非全屏
    let nowWidth = 0
    let nowHight = 0
    let nowMarginTop = 0 //获取弹框头部（这部分可双击全屏）
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    // dragDom.style.overflow = 'auto'
    dragDom.style.overflowY = 'auto'
    dragDom.style.overflowX = 'hidden'
    dialogHeaderEl.onselectstart = new Function('return false')
    //头部加上可拖动
    // cursordialogHeaderEl.style.cursor = 'move'
    // window.getComputedStyle(dom元素, null)
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)

    let moveDown = e => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop
      let styL, styT
      // 在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
      } else {
        styL = +sty.left.replace(/\px/g, '')
        styT = +sty.top.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        const l = e.clientX - disX
        const t = e.clientY - disY // 移动当前元素
        dragDom.style.left = `${l + styL}px`
        dragDom.style.top = `${t + styT}px`
        //binding.value({x:e.pageX,y:e.pageY})
      }

      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
    dialogHeaderEl.onmousedown = moveDown //双击头部
    dialogHeaderEl.ondblclick = e => {
      if (isFullScreen == false) {
        nowHight = dragDom.clientHeight
        nowWidth = dragDom.clientWidth
        nowMarginTop = dragDom.style.marginTop
        dragDom.style.left = 0
        dragDom.style.top = 0
        dragDom.style.height = '100VH'
        dragDom.style.width = '100VW'
        dragDom.style.marginTop = 0
        isFullScreen = true
        dialogHeaderEl.style.cursor = 'initial'
        dialogHeaderEl.onmousedown = null
      } else {
        dragDom.style.height = 'auto'
        dragDom.style.width = nowWidth + 'px'
        dragDom.style.marginTop = nowMarginTop
        isFullScreen = false
        dialogHeaderEl.style.cursor = 'move'
        dialogHeaderEl.onmousedown = moveDown
      }
    }
    //拉伸(右下方)
    let resizeEl = document.createElement('div')
    dragDom.appendChild(resizeEl)
    resizeEl.style.cursor = 'se-resize'
    resizeEl.style.position = 'absolute'
    resizeEl.style.height = '10px'
    resizeEl.style.width = '10px'
    resizeEl.style.right = '0px'
    resizeEl.style.bottom = '0px'
    resizeEl.style.zIndex = '99'
    //鼠标拉伸弹窗
    resizeEl.onmousedown = e => {
      let clientX = e.clientX
      // 鼠标按下，计算当前元素距离可视区的距离
      let disX = e.clientX - resizeEl.offsetLeft
      let disY = e.clientY - resizeEl.offsetTop

      document.onmousemove = function(e) {
        e.preventDefault()
        let x = e.clientX - disX + (e.clientX - clientX)
        let y = e.clientY - disY
        dragDom.style.width = x > minWidth ? `${x}px` : minWidth + 'px'
        dragDom.style.height = y > minHeight ? `${y}px` : minHeight + 'px'
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
    //拉伸(右边)
    let resizeElR = document.createElement('div')
    dragDom.appendChild(resizeElR)
    resizeElR.style.cursor = 'w-resize'
    resizeElR.style.position = 'absolute'
    resizeElR.style.height = '100%'
    resizeElR.style.width = '10px'
    resizeElR.style.right = '0px'
    resizeElR.style.top = '0px'
    resizeElR.onmousedown = e => {
      let elW = dragDom.clientWidth
      let EloffsetLeft = dragDom.offsetLeft
      let clientX = e.clientX
      document.onmousemove = function(e) {
        e.preventDefault()
        //右侧鼠标拖拽位置
        if (clientX > EloffsetLeft + elW - 10 && clientX < EloffsetLeft + elW) {
          //往左拖拽
          if (clientX > e.clientX) {
            if (dragDom.clientWidth < minWidth) {
            } else {
              dragDom.style.width = elW - (clientX - e.clientX) * 2 + 'px'
            }
          } //往右拖拽
          if (clientX < e.clientX) {
            dragDom.style.width = elW + (e.clientX - clientX) * 2 + 'px'
          }
        }
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
    //拉伸(左边)
    let resizeElL = document.createElement('div')
    dragDom.appendChild(resizeElL)
    resizeElL.style.cursor = 'w-resize'
    resizeElL.style.position = 'absolute'
    resizeElL.style.height = '100%'
    resizeElL.style.width = '10px'
    resizeElL.style.left = '0px'
    resizeElL.style.top = '0px'
    resizeElL.onmousedown = e => {
      let elW = dragDom.clientWidth
      let EloffsetLeft = dragDom.offsetLeft
      let clientX = e.clientX
      document.onmousemove = function(e) {
        e.preventDefault()
        //左侧鼠标拖拽位置
        if (clientX > EloffsetLeft && clientX < EloffsetLeft + 10) {
          //往左拖拽
          if (clientX > e.clientX) {
            dragDom.style.width = elW + (clientX - e.clientX) * 2 + 'px'
          } //往右拖拽
          if (clientX < e.clientX) {
            if (dragDom.clientWidth < minWidth) {
            } else {
              dragDom.style.width = elW - (e.clientX - clientX) * 2 + 'px'
            }
          }
        }
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
    // 拉伸(下边)
    let resizeElB = document.createElement('div')
    dragDom.appendChild(resizeElB)
    resizeElB.style.cursor = 'n-resize'
    resizeElB.style.position = 'absolute'
    resizeElB.style.height = '10px'
    resizeElB.style.width = '100%'
    resizeElB.style.left = '0px'
    resizeElB.style.bottom = '0px'
    resizeElB.onmousedown = e => {
      let EloffsetTop = dragDom.offsetTop
      let ELscrollTop = el.scrollTop
      let clientY = e.clientY
      let elH = dragDom.clientHeight
      document.onmousemove = function(e) {
        e.preventDefault()
        //底部鼠标拖拽位置
        if (
          ELscrollTop + clientY > EloffsetTop + elH - 20 &&
          ELscrollTop + clientY < EloffsetTop + elH
        ) {
          //往上拖拽
          if (clientY > e.clientY) {
            if (dragDom.clientHeight < minHeight) {
            } else {
              dragDom.style.height = elH - (clientY - e.clientY) * 2 + 'px'
            }
          } //往下拖拽
          if (clientY < e.clientY) {
            dragDom.style.height = elH + (e.clientY - clientY) * 2 + 'px'
          }
        }
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
})
