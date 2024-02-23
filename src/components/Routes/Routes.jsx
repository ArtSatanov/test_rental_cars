import { Layout } from 'components/Layout/Layout';
import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'const';
import { Favorites, Home, NotFound } from 'pages';

export const Routes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Layout />}>
          <Route path={routes.CATALOG_ROUTE} element={<Home />} />
          <Route path={routes.FAVORITES_ROUTE} element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
