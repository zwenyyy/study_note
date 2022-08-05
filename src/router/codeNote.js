export default [
  {
    path: '/codeNote',
    name: 'code_note',
    component: () => import('../views/codeNote/index.vue'),
    children: [
      {
        path: 'css-display-grid',
        name: 'note_css_grid',
        component: () => import('@/views/codeNote/CSSHTML/display/grid.vue'),
        meta: {
          title: '栅格布局',
          name: 'note_css_grid',
        }
      },
      {
        path: 'vue3-create',
        name: 'vue3_create',
        component: () => import('@/views/codeNote/vue3/createNote/create.vue'),
        meta: {
          title: 'vue3搭建注意事项',
          name: 'vue3_create',
        }
      },
      {
        path: 'element-plus',
        name: 'element_plus',
        component: () => import('@/views/codeNote/vue3/elementplus/index.vue'),
        meta: {
          title: 'ElementPlus注意事项',
          name: 'element_plus',
        }
      },
    ]
  }
]


          // authentication: true,
          // keepAlive: true