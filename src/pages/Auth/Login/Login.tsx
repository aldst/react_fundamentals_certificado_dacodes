import { Button, Checkbox, Form, Input, Typography } from "antd";

import './Login.css';
import { useLogin } from "../../../services/login";
import Template from "../../../templates/Template";
import { useState } from 'react';

const { Title } = Typography;

const LoginComponent = () => {

  const [loginForm] = Form.useForm();
  const [loginButtonDisable, setLoginButtonDisable] = useState<boolean>(true);

  const { handleNavigateDashboard } = useLogin();
    
  const handleLoginButton = () => {
    loginForm
      .validateFields()
      .then(() => {
        setLoginButtonDisable(false);
      }).catch(() => {
        setLoginButtonDisable(true); 
      })
  }

  return (
    <Template>
      <div className='login content_style texto_blanco'>
      <Title className="texto_blanco" level={3}>Login</Title>
      <Title className="texto_blanco" level={5}>¡Bienvenido!</Title>
      <br/>
      <br/>
      <Form
        form={ loginForm }
        layout="vertical"
        style={{ maxWidth: 600 }}
        >
        <Form.Item label="Correo electrónico de DaCodes" name="email"
          rules={[
            { required: true, type: "email", message: 'Ingrese um correo electrónico válido' },
          ]}>
          <Input onChange={ handleLoginButton } />
        </Form.Item>
        <Form.Item className="texto_blanco" label="Contraseña" name="password" rules={[
          { required: true, min: 7 , message: 'Ingrese una contraseña con 7 caracteres o más' },
        ]}>
          <Input.Password onChange={ handleLoginButton } />
        </Form.Item>
        <Form.Item
          name="terms"
          valuePropName="checked"
          rules={[
            { required: true, message: "Acepte los términos y condiciones" }
          ]}
          style={{ paddingBottom: 25 }}
          >
          <Checkbox className="texto_blanco" onChange={ handleLoginButton }>
            He leído y acepto los términos y condiciones
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button className="texto_blanco" type="primary" htmlType="submit" 
            disabled={ loginButtonDisable }
            onClick={handleNavigateDashboard}>
            Crear cuenta
          </Button>
        </Form.Item>
      </Form>
      </div>
    </Template>
  )
}

export default LoginComponent;
