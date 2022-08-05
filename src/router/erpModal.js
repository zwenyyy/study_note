import erpModalComponent from '@/layout/erpModalComponent'
export default [
  {
    path: '/erpModal',
    name: 'erp_modal',
    component: erpModalComponent,
    children: [
      {
        path: 'router-head-check',
        name: 'router_head_check',
        component: () => import('@/views/codeNote/CSSHTML/display/grid.vue'),
        meta: {
          title: '栅格布局',
          name: 'router_head_check',
        }
      },
    ]
  }
]

// router component?
          // authentication: true,
          // keepAlive: true