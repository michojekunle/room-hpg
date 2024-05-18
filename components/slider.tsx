"use client";

import { useState } from "react";
import iconRight from "@/public/images/icon-angle-right.svg";
import iconLeft from "@/public/images/icon-angle-left.svg";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MenuIcon,
  MoveRight,
  X,
} from "lucide-react";
import Image from "next/image";
import imgSlide1 from "@/public/images/desktop-image-hero-1.jpg";
import imgSlide2 from "@/public/images/desktop-image-hero-2.jpg";
import imgSlide3 from "@/public/images/desktop-image-hero-3.jpg";
import Link from "next/link";

const data = [
  {
    image: imgSlide1,
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: imgSlide2,
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: imgSlide3,
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const Slider = () => {
  const [count, setCount] = useState(0);
  const [curr, setCurr] = useState(data[count]);
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePrevSlide = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      setCurr(data[count - 1]);
    }
  };

  const handleNextSlide = () => {
    if (count < data.length - 1) {
      setCount((count) => count + 1);
      setCurr(data[count + 1]);
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row md:min-h-[53vh]">
      <div className="relative w-full flex-1 min-h-[350px]">
        <Image
          src={curr.image}
          alt="main-image"
          className="w-full absolute h-full"
        />
        <div className="hidden md:flex gap-12 z-20 relative py-8 px-12">
          <div className="flex items-center">
            <h1 className="text-white font-bold text-2xl cursor-pointer">
              room
            </h1>
          </div>
          <ul className="flex items-center gap-3">
            <li className="text-white border-b-2 border-transparent hover:border-white py-2.5 px-2 text-[12px]">
              <Link href="">home</Link>
            </li>
            <li className="text-white border-b-2 border-transparent hover:border-white py-2.5 px-2 text-[12px]">
              <Link href="">shop</Link>
            </li>
            <li className="text-white border-b-2 border-transparent hover:border-white py-2.5 px-2 text-[12px]">
              <Link href="">about</Link>
            </li>
            <li className="text-white border-b-2 border-transparent hover:border-white py-2.5 px-2 text-[12px]">
              <Link href="">contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden relative z-20 py-7 px-6 w-full">
          <div className="flex items-center w-full">
            <div className="flex items-center">
              <MenuIcon
                className="w-7 h-7 text-white"
                onClick={() => setMenuOpen(true)}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <h1 className="text-white font-bold text-2xl cursor-pointer">
                room
              </h1>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="flex items-center justify-between bg-white py-7 px-8 fixed top-0 left-0 w-full z-40">
            <X
              className="w-7 h-7 text-gray-300"
              onClick={() => setMenuOpen(false)}
            />
            <ul className="flex items-center gap-4 text-lg">
              <li className="">
                <Link href="">home</Link>
              </li>
              <li className="">
                <Link href="">shop</Link>
              </li>
              <li className="">
                <Link href="">about</Link>
              </li>
              <li className="">
                <Link href="">contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex-1 flex items-center justify-center py-10 px-12 ">
          <div className="md:max-w-[350px]">
            <h2 className="text-3xl text-black font-bold mb-2">{curr.title}</h2>
            <p className="text-[12px] w-full text-dark-gray leading-relaxed my-3">
              {curr.description}
            </p>
            <button className="flex group items-center gap-3 mt-3 hover:text-dark-gray transition">
              <span className="uppercase tracking-[12px] text-[12px]">
                shop now
              </span>
              <MoveRight />
            </button>
          </div>
        </div>
        <div className="flex self-start">
          <button
            className="py-4 px-4 bg-black hover:bg-very-dark-gray transition text-white text-2xl"
            onClick={handlePrevSlide}
            disabled={count <= 0}
          >
            <ChevronLeft />
          </button>
          <button
            className="py-3 px-4 bg-black hover:bg-very-dark-gray transition text-white text-2xl"
            onClick={handleNextSlide}
            disabled={count >= 2}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
