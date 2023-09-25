import { Spin } from 'antd'
import styles from './index.module.scss'
const Loading = () => {
  return (
    <div className={styles['loading-wrap']}>
      <Spin wrapperClassName={styles['loading-wrap']} size="default">
        {/* <div>Loading</div> */}
      </Spin>
    </div>
  )
}

export default Loading
