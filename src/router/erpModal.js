import erpModalComponent from '@/layout/erpModalComponent'
export default [
  {
    path: '/erpModal',
    name: 'erp_modal',
    component: erpModalComponent,
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
    ]
  }
]

// router component?
          // authentication: true,
          // keepAlive: true