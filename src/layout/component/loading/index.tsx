import { Spin } from 'antd'
import styles from './index.module.scss'
const Loading = () => {
  return (
    <div className={styles['loading-wrap']}>
      <Spin size="large" />
    </div>
  )
}

export default Loading
