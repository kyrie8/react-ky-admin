import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IMenu } from '@/mock'

// type IMenu = typeof MenuList

interface IUserInfo {
  token: string
  menuList: IMenu
  setMenuLilt: (menu: IMenu) => Promise<boolean>
  setToken: (token: string) => void
}
const useUserInfo = create<IUserInfo>()(
  persist(
    (set) => ({
      token: '是大放声大哭',
      menuList: [],
      setMenuLilt: (menu) =>
        new Promise((resolve) => {
          set({ menuList: menu })
          resolve(true)
        }),
      setToken: (token) => set({ token })
    }),
    { name: 'userInfo' }
  )
)

export default useUserInfo
