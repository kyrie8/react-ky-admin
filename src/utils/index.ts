import { IMenu } from '@/mock'
import enUS from 'antd/locale/en_US'
import zhCN from 'antd/locale/zh_CN'

export function getFlattenRoutes(menuList: IMenu) {
  const res: { path: string; element: string | undefined }[] = []
  function travel(menu: IMenu) {
    menu.forEach((item) => {
      if (!item.isOutLink) {
        if (item.children && item.children.length) {
          travel(item.children)
        } else {
          res.push({
            path: item.path,
            element: item.component
          })
        }
      }
    })
  }
  travel(menuList)
  return res
}

export const module = import.meta.glob('../view/*/index.tsx')

export const languageORM: Record<string, any> = {
  zhCN: zhCN,
  enUS: enUS
}
