import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className="flex items-center justify-center  min-h-[95vh]">
      <div
        className={cn(
          "flex space-y-3 flex-col items-center justify-center",
          montserrat.className
        )}
      >
        <div className="relative md:w-36 md:h-36 w-24 h-24">
          <Image
            src="/profile.png"
            alt="avatar"
            fill
            priority
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-lg font-semibold">Sukhrob Abdullaev</h1>
        <div className="text-center flex flex-col md:text-base text-md">
          <span>A Software Engineer</span>
          <span> Computer Science enthusiast</span>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="">
            Read a blog
          </Button>
          <Button variant="ghost">About me</Button>
        </div>
      </div>
    </main>
  );
}
