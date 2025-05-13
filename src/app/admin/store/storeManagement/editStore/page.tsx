
import React, { Suspense } from 'react';
import EditStore from './EditStore';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditStore />
    </Suspense>
  );
}
