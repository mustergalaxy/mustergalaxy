import * as React from "react";
import {
  createBrowserRouter,

} from "react-router-dom";
import OnbordingPage from "../pages/Onbording/OnbordingPage";
import NftComponent from "../pages/Nft/NftComponent";
import Test from "../components/test/test";
// import LayoutComponent from "../LayoutComponent";
import SignUp from "../pages/SignUp/SignUpPage";
// import SignupUrbitID from "../components/signupUrbitID/SignupUrbitID";
import Sidebar from "../components/Sidebar/Sidebar";
import LoginPage from "../pages/LoginPage/LoginPage";
// import SignupEmail from "../components/SignupEmail/SignupEmail";
// import Provider from "../components/Provider/Provider";
import ProviderIframe from "../components/ProviderIframe/ProviderIframe";
import UrbitIDCreated from "../components/UrbitIDCreated/UrbitIDCreated";
import SetupWallet from "../components/SetupWallet/SetupWallet";

import SignUrbit from "../pages/SignUrbit/SignUrbit";
import SignupEmailPage from "../pages/SignupEmail/SignupEmailPage";
import ProviderPage from "../pages/Provider/ProviderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnbordingPage /> ,
  },
  // {
  //   path: "/login",
  //   element: <LayoutComponent />, // Use the layout component here
  //   children: [
  //     {
  //       index: true, // This represents the default page for "/login"
  //       element: <NftComponent />, // Use the login page as the default child
  //     },
  //     {
  //       path: "test", // This will be "/login/test"
  //       element: <Test />,
  //     },
  //   ],
  
  // },
  {
    path: "/nft",
    element: <NftComponent /> ,
  },
  {
    path: "/signup",
    element: <SignUp /> ,
  },
  {
    path: "/signupUrbit",
    element: <SignUrbit /> ,
  },
  {
    path: "/sidebar",
    element: <Sidebar /> ,
  },
  {
    path:'/loginpage',
    element:<LoginPage/>
  },
  {
    path:'/signupEmail',
    element: <SignupEmailPage/>
  },
  {
    path:'/test',
    element: <Test/>
  },
  {
    path:'/provider',
    element: <ProviderPage/>
  },
  {
    path:'/providerIframe',
    element:<ProviderIframe/>
  },
  {
    path: '/urbitidcreated',
    element: <UrbitIDCreated/>
  },
  {
    path:'setupwallet',
    element: <SetupWallet/>
  }
]
);
 
export default router;