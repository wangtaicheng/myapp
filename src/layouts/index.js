import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import {TransitionGroup, CSSTransition} from "react-transition-group";

import { Layout, Menu, Icon } from 'antd';

const { Header,Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          style={{ minHeight: '100vh' }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggle}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>users</span>
              <Link to={'/users'}/>
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="video-camera" /><span>demo</span></span>}>
              <SubMenu key="sub4" title="button">
                <Menu.Item key="41">
                  <span>button</span>
                  <Link to={'/demo/button/button'}/>
                </Menu.Item>

              </SubMenu>
              <SubMenu key="sub5" title="布局">
                <Menu.Item key="51">
                  <span>grid</span>
                  <Link to={'/demo/layout/grid/grid1'}/>
                </Menu.Item>

              </SubMenu>
              <SubMenu key="sub3" title="tables">
                <Menu.Item key="31">
                  <span>table1</span>
                  <Link to={'/demo/table/table1'}/>
                  </Menu.Item>
                <Menu.Item key="32">
                  <span>table2</span>
                  <Link to={'/demo/table/table2'}/>
                </Menu.Item>
                <Menu.Item key="33">
                  <span>table3</span>
                  <Link to={'/demo/table/table3'}/>
                </Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="3" >
              <Icon type="upload" />
              <span>首页</span>
              <Link to={'/'}/>
            </Menu.Item>
            <Menu.Item key="4" >
              <Icon type="upload" />
              <span>model传值</span>
              <Link to={'/testPage'}/>
            </Menu.Item>
            <Menu.Item key="5" >
              <Icon type="upload" />
              <span>数据流</span>
              <Link to={'/dataTransfer'}/>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>

          <Content style={{ marginLeft: '16px', backgroundColor: '#fff' }}>
            <TransitionGroup>
              <CSSTransition key={this.props.location.pathname} classNames="fade" timeout={300}>
                {this.props.children}
              </CSSTransition>
            </TransitionGroup>
          </Content>
          <Footer/>
        </Layout>
      </Layout>
    );
  }
}

export  default  withRouter(SiderDemo);

