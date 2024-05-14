import Image from "next/image";
import furniture from "@/public/images/image-about-dark.jpg";
import singleChair from "@/public/images/image-about-light.jpg";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <div className="">
        <div className="w-full flex min-h-[50vh]">
          <Slider/>
        </div>
        <div className="lg:grid md:grid-cols-2 lg:grid-cols-3 min-h-[50vh]">
          <div className="w-full h-full">
            <Image
              src={furniture}
              alt="furniture-dark"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full py-8 px-12">
            <h3 className="text-lg tracking-[8px] text-black font-bold uppercase mb-2">About our furniture</h3>
            <p className="text-[12px] w-full text-dark-gray leading-relaxed">
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
          <div className="w-full h-full">
            <Image
              src={singleChair}
              alt="furniture-light"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
