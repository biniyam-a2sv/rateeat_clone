import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonOutlineDisabled from "./misc/ButtonOutlineDisabled";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={ scrollAnimation }
              className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed"
            >
              Find Yourself Here
            </motion.h3>
            {/* <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              You could benefit
            </motion.p> */}
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={ scrollAnimation }
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={ {
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                } }
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/yellow_star.png"
                    width={ 80 }
                    height={ 80 }
                    alt="star rating"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Foodie
                </p>
                <ul className="flex flex-col list-inside pl-4 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Discover restaurants and foods around you
                  </li>
                  <li className="relative check custom-list my-2">
                    Access genuine reviews
                  </li>
                  <li className="relative check custom-list my-2">
                    Engage with a community
                  </li>
                  <li className="relative check custom-list my-2">
                    Support local businesses
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={ scrollAnimation }
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={ {
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                } }
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/rocket_boost.png"
                    width={ 80 }
                    height={ 80 }
                    alt="rocket boost"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Business Owners
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Increased visibility
                  </li>
                  <li className="relative check custom-list my-2">
                    Customer reviews
                  </li>
                  <li className="relative check custom-list my-2">
                    Community engagement
                  </li>
                  <li className="relative check custom-list my-2">
                    Promotion opportunities
                  </li>
                  <li className="relative check custom-list my-2">
                    Stand out in a competitive market
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutlineDisabled>Coming Soon</ButtonOutlineDisabled>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={ scrollAnimation }
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={ {
                  scale: 1.1,
                  transition: {
                    duration: .2
                  }
                } }
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/cycle_check.png"
                    width={ 80 }
                    height={ 80 }
                    alt="check"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Delivery Services
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Job matching
                  </li>
                  <li className="relative check custom-list my-2">
                    Smooth communication
                  </li>
                  <li className="relative check custom-list my-2">
                    Job opportunities
                  </li>
                  <li className="relative check custom-list my-2">
                    Fair distribution
                  </li>
                  <li className="relative check custom-list my-2">
                    Connect from anywhere
                  </li>
                  <li className="relative check custom-list my-2">
                    Support system
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">

                {/* <ButtonOutlineDisabled>Coming Soon</ButtonOutlineDisabled> */}
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        {/* <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={ scrollAnimation }
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Market Size
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-full sm:w-7/12 lg:w-6/12" variants={ scrollAnimation }>
            RateEat is a promising platform for restaurant discovery and engagement, with significant growth opportunities in both local and global markets.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={ scrollAnimation }>
              <Maps className="w-full h-auto"/>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
          </ScrollAnimationWrapper>
        </div> */}
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={ scrollAnimation }
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              <p className="text-lg">Incase you're wondering</p>
              <h4 className="font-bold">FAQ</h4>
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={ scrollAnimation }>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={ scrollAnimation } custom={ { duration: 3 } }>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Download mobile app now
                  </h5>
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">Explore the features!</h5>
                  <p className="mt-3">Discover and explore with us.</p>
                </div>
                <a href="https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile">
                  <ButtonPrimary>Get Started</ButtonPrimary>

                </a>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={ { filter: "blur(114px)" } }
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
