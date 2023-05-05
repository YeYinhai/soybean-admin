const document: AuthRoute.Route = {
  name: 'dataease',
  path: '/dataease',
  component: 'basic',
  children: [
    {
      name: 'dataease_dataset',
      path: '/dataease/dataset',
      component: 'self',
      meta: {
        title: 'dataset',
        requiresAuth: true,
        icon: 'logos:vue',
        keepAlive: true,
        iframeKeepAlive: true
      }
    }
  ],
  meta: {
    title: '指标管理',
    icon: 'mdi:file-document-multiple-outline',
    order: 2
  }
};

export default document;
