import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

interface Props {
  children: ReactNode;
  title?: string;
}

const Layout = ({ title = "VipId", children }: Props) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    {children}
  </>
);

export { Layout };
