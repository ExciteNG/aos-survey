import React, { Suspense } from "react";
import spinner from "../asset/img/spinner.svg"

const Home = React.lazy(() => import("../pages/landing/Index"));
const Auth = React.lazy(()=>import("../pages/auth/Index"));

// 
export const HomePage = () => (
  <Suspense fallback={<FallBack />}>
    <Home />
  </Suspense>
);
export const AuthPage = () => (
  <Suspense fallback={<FallBack />}>
    <Auth />
  </Suspense>
);


function FallBack (){
  return(
    <div className="fall-back-wrapper">
      <div>
        <img src={spinner} />
      </div>
    </div>
  )
}