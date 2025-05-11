
import React, { Suspense } from 'react';
import SingleUserRender from './SingleUserRender';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleUserRender />
    </Suspense>
  );
}
