import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  FAQsList = [
    {
      question: "How can I use RateEat to find restaurants?",
      answer:
        "You can easily find restaurants using RateEat by exploring the curated list of nearby dining options, refining your search with filters, and accessing detailed profiles for each restaurant.",
      link: {
      title : "Mobile app",
        link : "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile"
      }
    },
    {
      question: "How does RateEat ensure the reliability and accuracy of restaurant reviews?",
      answer:
        "User-generated content on RateEat is subjected to a careful moderation process after writing. Additionally, community feedback and reporting mechanisms help maintain the integrity of reviews, ensuring authenticity and reliability.",
    },
    {
      question: "How often is RateEat's restaurant information updated?",
      answer:
        "We strive to provide accurate and up-to-date information. Our team continuously works on updating the restaurant details, menus, and other relevant data to ensure you have the most reliable information at your fingertips.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {FAQsList.map((freqQuestion, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col h-[340px]">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <div className="flex flex-col text-left">
                    <p className="text-lg text-black-600 font-semibold">
                      {freqQuestion.question}
                    </p>
                  </div>
                </div>
                
              </div>
              <p className="mt-5 text-left text-base">{ freqQuestion.answer }</p>
              { freqQuestion.link ?
              (
                  <div className="w-full flex mt-2 gap-1">
                    Explore more on our
              <a className="text-orange-500 hover:text-orange-500" href={ freqQuestion.link.link }>{ freqQuestion.link.title}</a>

                    </div>
              ) : null
            }
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        {
          FAQsList.length > 3 && (
            <div className="flex flex-none justify-between w-auto mt-14">
              <div
                className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={ sliderRef?.slickPrev }
              >
                <ArrowBack className="h-6 w-6 " />
              </div>
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={ sliderRef?.slickNext }
              >
                <ArrowNext className="h-6 w-6" />
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Testimoni;
