import React, { lazy, Suspense } from 'react';

const MyComponent = lazy(() => import('./button'));

export const LazyAndSuspenseDemo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MyComponent />
  </Suspense>
);
