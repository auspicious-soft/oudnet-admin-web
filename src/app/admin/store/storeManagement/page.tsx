
import React, { Suspense } from 'react';
import SingleStore from './SingleStore';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SingleStore />
    </Suspense>
  );
}
