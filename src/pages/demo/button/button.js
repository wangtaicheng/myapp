import {Button} from 'antd';

export default () => {
  return <div>
          <Button type="primary" loading={true}>Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
}
