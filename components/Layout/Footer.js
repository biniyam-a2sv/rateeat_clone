import React from "react";
import RateEatLogo from "../../public/assets/rateeat_logo.svg";
import Telegram from "../../public/assets/Icon/Telegram.svg";
import LinkedIn from "../../public/assets/Icon/LinkedIn.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import GooglePlayStore from "../../public/assets/Icon/google_play_store.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <RateEatLogo className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">RateEat</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://t.me/RateEat_bot">
                <Telegram className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.linkedin.com/company/101549517">
                <LinkedIn className="h-6 w-6" />
              </a>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://www.instagram.com/rateeat_2024/">
                <Instagram className="h-6 w-6" />
              </a>

            </div>
          </div>
          <p className="text-gray-400">©{ new Date().getFullYear() } - RateEat</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Mobile App
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Telegram Bot
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Socials</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Instagram
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LinkedIn
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Give ratings and write reviews
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Give restaurant suggestions
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile">
                    <GooglePlayStore className="h-auto w-32 my-0" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
