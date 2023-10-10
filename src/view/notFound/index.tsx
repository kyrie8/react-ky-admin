import { Button } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const nav = useNavigate()
  return (
    <div className={styles['not-found-wrap']}>
      <span>not found</span>
      <Button onClick={() => nav(-1)}>返回</Button>
    </div>
  )
}
