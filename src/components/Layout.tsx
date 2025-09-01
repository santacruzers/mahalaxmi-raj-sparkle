import React from 'react';
import Navigation from './Navigation';
import CursorTrail from './CursorTrail';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <CursorTrail />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;