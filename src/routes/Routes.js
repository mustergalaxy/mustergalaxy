import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import OnbordingPage from "../pages/Onbording/OnbordingPage";
import NftComponent from "../pages/Nft/NftComponent";
import SignUp from "../pages/SignUp/SignUpPage";
import Sidebar from "../components/Sidebar/Sidebar";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProviderIframe from "../components/ProviderIframe/ProviderIframe";
import UrbitIDCreated from "../components/UrbitIDCreated/UrbitIDCreated";
import SetupWallet from "../components/SetupWallet/SetupWallet";

import SignUrbit from "../pages/SignUrbit/SignUrbit";
import SignupEmailPage from "../pages/SignupEmail/SignupEmailPage";
import ProviderPage from "../pages/Provider/ProviderPage";
import DefaultBrowser from "../components/DefaultBrowser/DefaultBrowser";
import ImportedWalletSuccessful from "../components/ImportedWalletSuccessful/ImportedWalletSuccessful";
import CreateWalletSuccessful from "../components/CreateWalletSuccessFul/CreateWalletSuccessful";
import CreateWalletPassword from "../components/CreateWalletPassword/CreateWalletPassword";

import UnsupportedBlockChainModal from "../components/UnsupportedBlockChainModal/UnsupportedBlockChainModal";
import ImportedWalletSeed from "../components/ImportWalletSeed.js/ImportWalletSeed";
import BackupSeedPhrase from "../components/BackupSeedPhrase/BackupSeedPhrase";
import AccountSuccessfullyConnected from "../components/AccountSuccessfullyConnected/AccountSuccessfullyConnected";
import VerifySeedPhrase from "../components/VerifySeedPhrase/VerifySeedPhrase";
import IndianFork from "../components/IndianFork/IndianFork";
import UrbitFork from "../components/UrbitFork/UrbitFork";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OnbordingPage />,
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
    element: <NftComponent />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signupUrbit",
    element: <SignUrbit />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
  {
    path: "/signupEmail",
    element: <SignupEmailPage />,
  },
  {
    path: "/provider",
    element: <ProviderPage />,
  },
  {
    path: "/providerIframe",
    element: <ProviderIframe />,
  },
  {
    path: "/urbitidcreated",
    element: <UrbitIDCreated />,
  },
  {
    path: "setupwallet",
    element: <SetupWallet />,
  },
  {
    path: "defaultbrowser",
    element: <DefaultBrowser />,
  },
  {
    path: "ImportwalletSuccessful",
    element: <ImportedWalletSuccessful />,
  },
  {
    path: "createwalletSuccessful",
    element: <CreateWalletSuccessful />,
  },
  {
    path: "createwalletpassword",
    element: <CreateWalletPassword />,
  },
  {
    path: "musterCreatewalletpassword",
    element: <CreateWalletPassword />,
  },
  {
    path: "unsupportedBlockChainModal",
    element: <UnsupportedBlockChainModal />,
  },
  {
    path: "importwalletseed",
    element: <ImportedWalletSeed />,
  },
  {
    path: "backupseedphrase",
    element: <BackupSeedPhrase />,
  },
  {
    path: "accountSuccessfullyConnected",
    element: <AccountSuccessfullyConnected />,
  },
  {
    path: "verifyseedphrase",
    element: <VerifySeedPhrase />,
  },
  {
    path: "indianFork",
    element: <IndianFork />,
  },
  {
    path: "urbitFork",
    element: <UrbitFork />,
  },
]);

export default router;
