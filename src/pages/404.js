import {Button} from 'antd';
import Link from 'umi/link';
import router from 'umi/router';

export default () => {
  return (
    <div>I am a customized 404 page
      <button onClick={() => { router.goBack(); }}>go back</button>
      <Button type="primary" onClick={() => { router.goBack();}}>Primary</Button>
    </div>

  );
};
