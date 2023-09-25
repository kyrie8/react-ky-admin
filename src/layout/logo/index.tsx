/* eslint-disable react-refresh/only-export-components */
import styles from './index.module.scss'
import antdImg from '@/assets/antd.svg'
import { theme } from 'antd'
import Text from 'antd/es/typography/Text'
import { memo } from 'react'
const { useToken } = theme

interface IProps {
  collapsed: boolean
}

const Logo: React.FC<IProps> = (props: IProps) => {
  const { collapsed } = props
  const { token } = useToken()
  return (
    <div className={styles['logo-vertical']}>
      <img src={antdImg} alt="" />
      {
        <Text
          className={[styles.text, !collapsed ? styles['show'] : ''].join(' ')}
          style={{ color: token.colorPrimary }}
        >
          h1. Ant Design
        </Text>
      }
    </div>
  )
}

export default memo(Logo)
