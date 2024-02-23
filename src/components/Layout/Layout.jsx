import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      Layout
      <Suspense fallback={<p>LOADING</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
