import React, { Suspense } from "react";

const Home = React.lazy(() => import("../pages/landing/Index"));
const Auth = React.lazy(()=>import("../pages/auth/Index"));


// 
export const HomePage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Home />
  </Suspense>
);
export const AuthPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Auth />
  </Suspense>
);
