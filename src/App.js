//navigation component providers
import HeaderNavigation from './navigation/Header';
import SiderNavigation from './navigation/Sider';
import ContentComponent from './navigation/Content';

//ant-d imports
import { Layout, Breadcrumb } from 'antd';

//global .css
import './App.css';


function App() {
  return (
    <div className="App">
      <Layout style={{height: "100vh"}}>
        <HeaderNavigation />
        <Layout >
          {/* <SiderNavigation /> */}
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <ContentComponent />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
