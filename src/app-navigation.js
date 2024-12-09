export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'About',
    icon: 'info',
    items: [
      {
        text: 'Profile',
        icon: 'user',
        path: '/profile'
      },
      {
        text: 'Tasks',
        icon: 'search',
        path: '/tasks'
      }
    ]
  }
];
