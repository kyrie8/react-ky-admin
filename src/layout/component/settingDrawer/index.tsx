import useUserCustomStore from '@/store/useUserCustom'
import { ColorPicker, Drawer, Space } from 'antd'
import React, { memo } from 'react'

interface IProps {
  open: boolean
  setOpen: (v: boolean) => void
  closable?: boolean
}

const MySettingDrawer: React.FC<IProps> = (props: IProps) => {
  const { open, closable, setOpen } = props
  const { color, setColor } = useUserCustomStore()
  return (
    <Drawer open={open} onClose={() => setOpen(false)} closable={closable}>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className="overall-style">
          <h3>整体风格设置</h3>
        </div>
        <div className="overall-theme">
          <h3>主题色</h3>
          <ColorPicker
            destroyTooltipOnHide
            value={color}
            onChangeComplete={(color) => {
              setColor(color.toHexString())
            }}
          />
        </div>
      </Space>
    </Drawer>
  )
}
MySettingDrawer.defaultProps = {
  open: false,
  closable: false
}
export default memo(MySettingDrawer)
