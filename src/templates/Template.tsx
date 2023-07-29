import React from "react";
import { Layout } from "antd";

import HeaderComponent from "../components/Header/Header";
import FooterComponent from "../components/Footer/Footer";


interface TemplateI {
  children: React.ReactNode
}

const { Content } = Layout;

const Template = ({ children }: TemplateI) => {

  return (
    <Layout>
      <HeaderComponent></HeaderComponent>
      <Content className="content_style">
        {children}
      </Content>
      <FooterComponent></FooterComponent>
    </Layout>
  );
};

export default Template;