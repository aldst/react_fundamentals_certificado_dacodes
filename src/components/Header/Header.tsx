import { Avatar, Col, Image, Layout, Row } from "antd";

import './Header.css';
import { UserOutlined } from "@ant-design/icons";
import dacode_logo from '../../assets/dacodes_logo.png';


const { Header } = Layout;

const HeaderComponent = () => {

  return (
    <Header className='header_style texto_blanco'>
      <Row className="align-items-center" align="middle" >
        <Col span={12}>
          <Image width={100} preview={false} src={dacode_logo} />
        </Col>
        <Col span={12} style={{ textAlign: 'right', paddingRight:'1%' }}>
          <Avatar style={{ background: 'transparent'}} size={"large"} icon={<UserOutlined />} />
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent;
