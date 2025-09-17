import React from 'react';

const Layout = ({ children }) => (
  <div className="bg-light min-vh-100">
    <div className="container py-4">
      {children}
    </div>
  </div>
);

export default Layout;
