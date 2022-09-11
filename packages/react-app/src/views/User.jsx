import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import {
  EditUserProfile,
  Notifications,
  PublisherPage,
  ReputationPage,
  RewardsPage,
  UserArticles,
  UserSubmissions
} from "../components";

const configUserType = {
  none: -1,
  submission: 0,
  article: 1,
  editProfile: 2,
  wallet: 3,
  notifications: 4,
  publisher: 5,
  reputation: 6,
  rewards: 7,
};

export default function User({ userMenuOpen, handleUserMenuOpen }) {
  const [, setMenuOpen] = useState(userMenuOpen);
  const [userConfig, setUserConfig] = useState(configUserType.editProfile);
  const location = useLocation();
  const navigate = useNavigate();

  const { address } = useAccount();

  const handleMenuOpen = () => {
    setMenuOpen(false);
    handleUserMenuOpen(false);
  };

  const handleConfigTypeChanged = type => {
    if (type === configUserType.submission) {
      navigate("/user/submissions");
    } else if (type === configUserType.article) {
      navigate("/user/articles");
    } else if (type === configUserType.editProfile) {
      navigate("/user/author");
    } else if (type === configUserType.notifications) {
      navigate("/user/notifications");
    } else if (type === configUserType.publisher) {
      navigate("/user/publisher");
    } else if (type === configUserType.reputation) {
      navigate("/user/reputation");
    } else if (type === configUserType.rewards) {
      navigate("/user/rewards");
    }

    handleMenuOpen();
  };

  useEffect(() => {
    if (address === undefined) {
      setUserConfig(configUserType.editProfile);
    } else {
      if (location.pathname.includes("/submissions")) setUserConfig(configUserType.submission);
      else if (location.pathname.includes("/articles")) setUserConfig(configUserType.article);
      else if (location.pathname.includes("/author")) setUserConfig(configUserType.editProfile);
      else if (location.pathname.includes("/notifications")) setUserConfig(configUserType.notifications);
      else if (location.pathname.includes("/publisher")) setUserConfig(configUserType.publisher);
      else if (location.pathname.includes("/reputation")) setUserConfig(configUserType.reputation);
      else if (location.pathname.includes("/rewards")) setUserConfig(configUserType.rewards);
      else setUserConfig(configUserType.submission);
    }
  }, [address, location.pathname]);

  useEffect(() => {
    if (location.pathname.includes("/submissions")) setUserConfig(configUserType.submission);
    else if (location.pathname.includes("/articles")) setUserConfig(configUserType.article);
    else if (location.pathname.includes("/author")) {
      setUserConfig(configUserType.editProfile);
    } else if (location.pathname.includes("/notifications")) setUserConfig(configUserType.notifications);
    else if (location.pathname.includes("/publisher")) setUserConfig(configUserType.publisher);
    else if (location.pathname.includes("/reputation")) setUserConfig(configUserType.reputation);
    else if (location.pathname.includes("/rewards")) setUserConfig(configUserType.rewards);
  }, [location.pathname, address]);

  const Menu = () => (
    <>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.submission)}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M17.5 0C7.84 0 0 7.84 0 17.5C0 27.16 7.84 35 17.5 35C27.16 35 35 27.16 35 17.5C35 7.84 27.16 0 17.5 0ZM20.79 16.695L12.11 25.375L9.6425 22.9075L18.3225 14.2275L14.595 10.5L24.4825 10.5175L24.5 20.405L20.79 16.695Z"
            fill={userConfig === configUserType.submission ? "#B41C2E" : "#929292"}
          />
        </svg>
        <div className={userConfig === configUserType.submission ? "text-primary" : "text-lightgray"}>Submissions</div>
      </div>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.article)}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M3.5 7H0V31.5C0 33.425 1.575 35 3.5 35H28V31.5H3.5V7ZM31.5 0H10.5C8.575 0 7 1.575 7 3.5V24.5C7 26.425 8.575 28 10.5 28H31.5C33.425 28 35 26.425 35 24.5V3.5C35 1.575 33.425 0 31.5 0ZM29.75 15.75H12.25V12.25H29.75V15.75ZM22.75 22.75H12.25V19.25H22.75V22.75ZM29.75 8.75H12.25V5.25H29.75V8.75Z"
            fill={userConfig === configUserType.article ? "#B41C2E" : "#929292"}
          />
        </svg>
        <div className={userConfig === configUserType.article ? "text-primary" : "text-lightgray"}>Papers</div>
      </div>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.reputation)}
      >
        <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
            fill={userConfig === configUserType.reputation ? "#B41C2E" : "#929292"}
          />
        </svg>

        <div className={userConfig === configUserType.reputation ? "text-primary" : "text-lightgray"}>Reputation</div>
      </div>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.rewards)}
      >
        <svg width="35" height="35" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M0.25 0.25L3.4495 8.02C1.5325 9.211 0.25 11.3305 0.25 13.75C0.25 17.4715 3.27775 20.5 7 20.5C10.7222 20.5 13.75 17.4715 13.75 13.75C13.75 11.3313 12.4675 9.21175 10.5505 8.02L13.75 0.25H12.1285L9.1945 7.3735C8.69477 7.19946 8.17614 7.08541 7.6495 7.03375L10.4403 0.25H8.81875L6.00475 7.0825C5.59663 7.14225 5.19491 7.23967 4.80475 7.3735L1.8715 0.25H0.25ZM3.559 0.25L5.46475 4.8805L6.27625 2.91025L5.18125 0.25H3.559ZM7 8.5C9.89425 8.5 12.25 10.855 12.25 13.75C12.25 16.645 9.89425 19 7 19C4.10575 19 1.75 16.645 1.75 13.75C1.75 10.855 4.10575 8.5 7 8.5ZM7 10.8715L6.124 12.8365L4 13.069L5.59 14.497L5.14225 16.6045L7 15.5335L8.85775 16.606L8.41075 14.4985L10 13.0682L7.876 12.8358L7 10.8707V10.8715Z"
            fill={userConfig === configUserType.rewards ? "#B41C2E" : "#929292"}
          />
        </svg>

        <div className={userConfig === configUserType.rewards ? "text-primary" : "text-lightgray"}>Rewards</div>
      </div>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.notifications)}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M3.5 7H0V31.5C0 33.425 1.575 35 3.5 35H28V31.5H3.5V7ZM31.5 0H10.5C8.575 0 7 1.575 7 3.5V24.5C7 26.425 8.575 28 10.5 28H31.5C33.425 28 35 26.425 35 24.5V3.5C35 1.575 33.425 0 31.5 0ZM29.75 15.75H12.25V12.25H29.75V15.75ZM22.75 22.75H12.25V19.25H22.75V22.75ZM29.75 8.75H12.25V5.25H29.75V8.75Z"
            fill={userConfig === configUserType.notifications ? "#B41C2E" : "#929292"}
          />
        </svg>
        <div className={userConfig === configUserType.notifications ? "text-primary" : "text-lightgray"}>
          Notifications
        </div>
      </div>
      <div
        className="rounded-md bg-transparent hover:bg-gray px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.editProfile)}
      >
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="pr-3">
          <path
            d="M0 27.7093V35H7.29065L28.7932 13.4974L21.5026 6.20678L0 27.7093ZM34.4313 7.85932C35.1896 7.1011 35.1896 5.87627 34.4313 5.11804L29.882 0.568671C29.1237 -0.189557 27.8989 -0.189557 27.1407 0.568671L23.5828 4.12651L30.8735 11.4172L34.4313 7.85932Z"
            fill={userConfig === configUserType.editProfile ? "#B41C2E" : "#929292"}
          />
        </svg>
        <div className={userConfig === configUserType.editProfile ? "text-primary" : "text-lightgray"}>Profile</div>
      </div>
      <div
        className="rounded-md bg-transparent px-8 py-2 flex flex-row items-center cursor-pointer text-lg"
        onClick={() => handleConfigTypeChanged(configUserType.wallet)}
      >
        {address ? (
          <ConnectButton
            showBalance={false}
            chainStatus={{ smallScreen: "icon", largeScreen: "icon" }}
            accountStatus={{ largeScreen: "avatar", smallScreen: "avatar" }}
          />
        ) : (
          <ConnectButton />
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="py-8 px-4 sm:px-8 md:px-10 xl:px-20 overflow-hidden bg-gray">
        <div className="relative flex flex-row gap-8">
          {userMenuOpen && (
            <>
              <div className="absolute z-10">
                <div id="overlay"></div>
              </div>
              <div className="absolute z-20 lg:hidden top-0 -left-8 flex flex-col rounded-r-xl bg-white px-4 py-10 h-full space-y-4 pb-10">
                <Menu />
              </div>
            </>
          )}
          <div className="hidden lg:flex flex-col rounded-xl bg-white px-4 py-10 space-y-4 h-screen">
            <Menu />
          </div>
          <div className="w-full ">
            {userConfig === configUserType.none ? (
              <div className="flex justify-center">
                <div className="flex flex-col items-center">Hello</div>
              </div>
            ) : userConfig === configUserType.submission ? (
              <div className="flex flex-col">
                <UserSubmissions address={address}></UserSubmissions>
              </div>
            ) : userConfig === configUserType.article ? (
              <div className="flex flex-col">
                <UserArticles address={address}></UserArticles>
              </div>
            ) : userConfig === configUserType.editProfile ? (
              <div className="flex flex-col">
                <EditUserProfile />
              </div>
            ) : userConfig === configUserType.notifications ? (
              <div className="flex flex-col">
                <Notifications />
              </div>
            ) : userConfig === configUserType.publisher ? (
              <div className="flex flex-col">
                <PublisherPage />
              </div>
            ) : userConfig === configUserType.reputation ? (
              <div className="flex flex-col ">
                <ReputationPage />
              </div>
            ) : userConfig === configUserType.rewards ? (
              <div className="flex flex-col ">
                <RewardsPage />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
