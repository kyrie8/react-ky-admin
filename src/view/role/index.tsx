import { Calendar } from 'antd'

const Role = () => {
  const wrapperStyle: React.CSSProperties = {
    width: 300
  }
  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} />
    </div>
  )
}

export default Role
