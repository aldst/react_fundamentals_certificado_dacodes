import { Col, Image, Layout, Row, Typography } from "antd";
import logo_GPTW from '../../assets/logo_GPTW.png';
import BestPlaceToCode from '../../assets/BestPlaceToCode.png';
import EFY from '../../assets/EFY.png';
import aws_partner from '../../assets/aws_partner.png';
import './Footer.css';

const { Title } = Typography;
const { Footer } = Layout;

const FooterComponent = () => {

  return (
    <div>
      <Footer className='footer_style texto_blanco'>
      <Title className="texto_blanco" level={3}>We are coding the world of tomorrow_</Title>
      <Title className="texto_blanco interlineado footer_padding" level={5} style={{ lineHeight: 1.3, fontSize: 12, fontWeight: 'lighter' }}>
        DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.
      </Title>
      <Row justify={'start'} align="middle" gutter={[1, 13]} style={{paddingTop: 20, paddingBottom: 5 }}>
        <Col span={3}>
          <Image src={ BestPlaceToCode }/>
        </Col>
        <Col span={3}>
          <Image src={ logo_GPTW }/>
        </Col>
        <Col span={3}>
          <Image src={ EFY }/>
        </Col>
        <Col span={3}>
        <Image src={ aws_partner }/>
        </Col>
      </Row>
    </Footer>
    </div>
    
  )
}

export default FooterComponent;
