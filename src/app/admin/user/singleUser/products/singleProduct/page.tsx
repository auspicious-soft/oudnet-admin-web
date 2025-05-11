
import React, { Suspense } from 'react';
import SingleProductRender from './SingleProductRender';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleProductRender />
    </Suspense>
  );
}
