import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <div className="flex flex-col max-w-max bg-navy-blue container px-6 md:px-12">
      {/* <Navbar />
      <div className="container mt-24 mx-auto px-12">
        <HeroSection />
      </div> */}
      <div className=" flex justify-between gap-4 w-full relative">
        <div className="flex sticky top-0 max-h-screen w-1/2 flex-col overflow-auto py-24">
          <LeftSide />
        </div>
        <ScrollArea className="col-span-12 md:col-span-6 w-1/2 overflow-auto py-24">
          <RightSide />
        </ScrollArea>
      </div>

    </div>
  );
}
