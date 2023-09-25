import { FC, LazyExoticComponent } from 'react'

interface IRoute {
  path: string
  Component: LazyExoticComponent<FC<object>>
}

const WhiteRouter: IRoute[] = []

export default WhiteRouter
