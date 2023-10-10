import { Button, Form, Input, Space, Tooltip, Typography } from 'antd'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import useUserInfo from '@/store/userUserInfo'

import { MenuList } from '@/mock'

export default function Login() {
  const navigate = useNavigate()
  const { setMenuLilt, setToken } = useUserInfo()
  const onFinish = async () => {
    await setMenuLilt(MenuList)
    setToken('token')
    navigate('/home')
  }
  return (
    <div className={styles['login-wrap']}>
      <div className={styles['form-content']}>
        <Form
          name="complex-form"
          onFinish={onFinish}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            name="username"
            label="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="code">
            <Space>
              <Form.Item
                name="code"
                noStyle
                rules={[{ required: true, message: 'code is required' }]}
              >
                <Input placeholder="Please input" />
              </Form.Item>
              <Tooltip title="Useful information">
                <Typography.Link href="#API">Need Help?</Typography.Link>
              </Tooltip>
            </Space>
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
