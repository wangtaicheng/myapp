import { Tabs,Icon } from 'antd';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

export default ()=>{
  return (
    <Tabs defaultActiveKey="1" onChange={callback} tabPosition={'left'}>
      <TabPane tab={<span><Icon type="video-camera" /><span>Tab 1</span></span>} key="1">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
  )
}

