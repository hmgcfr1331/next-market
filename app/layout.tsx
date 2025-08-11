import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";

import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;