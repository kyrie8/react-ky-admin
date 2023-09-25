import { IMenu } from '@/mock'

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
