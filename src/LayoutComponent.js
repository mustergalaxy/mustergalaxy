// LayoutComponent.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
  return <Outlet />; // Only renders nested routes
};

export default LayoutComponent;