const about1: AuthRoute.Route = {
  name: 'about',
  path: '/about',
  component: 'iframe',
  meta: {
    title: '关于',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'iframe',
    href: 'https://docs.soybean.pro/',
    permissions: ['super', 'admin', 'user'],
    icon: 'fluent:book-information-24-regular',
    order: 10,
    siderVisible: false
  }
};

export default about1;
