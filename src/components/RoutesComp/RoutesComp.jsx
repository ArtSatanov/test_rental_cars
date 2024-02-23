import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'const';
import { Favorites, Home, NotFound } from 'pages';
import { Layout } from 'components/Layout/Layout';

export const RoutesComp = () => {
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
