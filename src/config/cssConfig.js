const noteConfig = {
  data() {
    return {
      noteData: {
        cssHtmlNote: {
          title: 'CSS + HTML 笔记',
          noteMenu: [{title: 'grid布局笔记', url: '/codeNote/css-display-grid'}]
        },
        jsNote: {
          title: 'JS 笔记',
          noteMenu: [{title: 'grid布局笔记', url: '/codeNote/css-display-grid'}]
        },
        vueNote: {
          title: 'vue 笔记',
          noteMenu: [
            {title: 'vue3搭建注意事项', url: '/codeNote/vue3-create'},
            {title: 'ElementPlus注意事项', url: '/codeNote/element-plus'}
          ]
        },
      }
    }
  },
}

export default noteConfig