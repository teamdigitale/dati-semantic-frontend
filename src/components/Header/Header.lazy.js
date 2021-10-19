import React, { lazy, Suspense } from 'react';

const LazyHeader = lazy(() => import('./Header'));

const Header = props => (
  <Suspense fallback={null}>
    <LazyHeader {...props} />
  </Suspense>
);

export default Header;
