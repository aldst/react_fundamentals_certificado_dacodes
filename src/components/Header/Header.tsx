import { Avatar, Col, Dropdown, Image, Layout, MenuProps, Row } from "antd";

import './Header.css';
import { UserOutlined } from "@ant-design/icons";
import dacode_logo from '../../assets/dacodes_logo.png';
import Title from "antd/es/typography/Title";
import { useNavigate } from "react-router-dom";


const { Header } = Layout;

const HeaderComponent = () => {

  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    sessionStorage.removeItem('token');
    navigate('/login');
  } 

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Title level={5} onClick={handleCerrarSesion}> Cerrar Sesión </Title>
      ),
    },
  ];

  return (
    <Header className='header_style texto_blanco'>
      <Row className="align-items-center" align="middle" >
        <Col span={12}>
          <Image width={100} preview={false} src={dacode_logo} />
        </Col>
        <Col span={12} style={{ textAlign: 'right', paddingRight:'1%' }}>
          <Dropdown
            menu={{ items}}
            >
            <Avatar style={{ background: 'transparent'}} size={"large"} icon={<UserOutlined />} />
          </Dropdown>
        </Col>
      </Row>
    </Header>
  )
}

export default HeaderComponent;
