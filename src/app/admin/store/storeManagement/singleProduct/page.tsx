
import React, { Suspense } from 'react';
import SingleProduct from './SingleProduct';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleProduct />
    </Suspense>
  );
}
