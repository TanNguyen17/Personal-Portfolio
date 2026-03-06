import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import CursorSpotlight from "./components/CursorSpotlight";

export default function Home() {
  return (
    <div className="relative flex flex-col max-w-[1280px] mx-auto min-h-screen px-6 md:px-12 lg:px-16">
      <CursorSpotlight />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full relative">
        <div className="flex lg:sticky lg:top-0 w-full max-h-screen lg:w-[45%] flex-col py-12 lg:py-24">
          <LeftSide />
        </div>
        <main className="w-full lg:w-[55%] py-12 lg:py-24 min-h-screen">
          <RightSide />
        </main>
      </div>
    </div>
  );
}
