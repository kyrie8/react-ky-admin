const MenuList = [
  {
    id: 99,
    name: '首页',
    path: '/home',
    icon: 'DashboardOutlined',
    component: 'view/home/index',
    isOutLink: false,
    isHidden: false
  },
  {
    id: 1,
    name: '系统管理',
    path: '/system',
    icon: 'SettingOutlined',
    isOutLink: false,
    isHidden: false,
    children: [
      {
        id: 2,
        name: '用户管理',
        path: '/system/user',
        icon: 'UserOutlined',
        isOutLink: false,
        isHidden: false,
        component: 'view/user/index',
        auth: 'user:view'
      },
      {
        id: 3,
        name: '菜单管理',
        path: '/system/menu',
        icon: 'AppstoreOutlined',
        isOutLink: false,
        isHidden: false,
        component: 'view/menu/index',
        auth: 'menu:view'
      },
      {
        id: 4,
        name: '角色管理',
        path: '/system/role',
        icon: 'TeamOutlined',
        isOutLink: false,
        isHidden: false,
        component: 'view/role/index',
        auth: 'role:view'
      },
      {
        id: 5,
        name: '部门管理',
        path: '/system/dept',
        icon: 'ApartmentOutlined',
        isOutLink: false,
        isHidden: false,
        component: 'view/dept/index',
        auth: 'dept:view'
      }
    ]
  }
]
const getMenu = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MenuList)
    }, 1000)
  })
}

export type IMenu = typeof MenuList

export { MenuList, getMenu }
