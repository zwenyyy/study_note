export default [
  {
    path: '/words-modal',
    name: 'words_modal',
    component: () => import('../views/wordsModal/index.vue'),
    // children: [
    //   {
    //     path: 'css-display-grid',
    //     name: 'note_css_grid',
    //     component: () => import('@/views/codeNote/CSSHTML/display/grid.vue'),
    //     meta: {
    //       title: '栅格布局',
    //       name: 'note_css_grid',
    //     }
    //   },
    // ]
  }
]

// router component?
          // authentication: true,
          // keepAlive: true