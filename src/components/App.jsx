import React from 'react';
import { RoutesComp } from './RoutesComp/RoutesComp';
import { ProductCard } from './reusableComponents/ProductCard/ProductCard';

export const App = () => {
  return (
    <>
      <ProductCard />
      <RoutesComp />
    </>
  );
};
