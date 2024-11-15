import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Home() {
  return (
    <div className="flex flex-col max-w-max bg-navy-blue container px-6 lg:px-12">
      <div className=" flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-10 w-full relative">
        <div className="flex lg:sticky lg:top-0 w-full max-h-screen lg:w-1/2 flex-col py-4 lg:py-16">
          <LeftSide />
        </div>
        <ScrollArea className="w-full lg:w-1/2 overflow-auto py-4 lg:py-16 min-h-screen">
          <RightSide />
        </ScrollArea>
      </div>
    </div>
  );
}
