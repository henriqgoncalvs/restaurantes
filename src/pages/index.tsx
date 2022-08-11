import { Button, Space, DatePicker, Typography } from 'antd';

export default function Home() {
  const onChange = () => {};
  return (
    <div style={{ padding: 100 }}>
      <Typography.Title level={1}>Ant Design</Typography.Title>
      <Space direction="vertical">
        <Button type="primary">Primary Button</Button>
        <Button type="ghost">Ghost Button</Button>
        <DatePicker onChange={onChange} />
      </Space>
    </div>
  );
}
