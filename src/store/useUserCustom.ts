import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ICustom {
  color: string
  language: string
  setColor: (color: string) => void
  setLanguage: (language: string) => void
}

const useUserCustomStore = create<ICustom>()(
  persist(
    (set) => ({
      color: '#1677ff',
      language: 'zhCN',
      setColor: (color) => set(() => ({ color })),
      setLanguage: (language) => set(() => ({ language }))
    }),
    { name: 'userCustom' }
  )
)

export default useUserCustomStore
