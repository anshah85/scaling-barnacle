import React, { ReactNode } from 'react';
import Navbar from './NavBar';
import './Layout.css'; // optional additional layout styles

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content container">{children}</div>
    </div>
  );
};

export default Layout;
