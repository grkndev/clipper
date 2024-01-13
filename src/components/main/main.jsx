import Image from "next/image";
import { DM_Sans, Inter, Kanit } from "next/font/google";
import Input from "./component/input";
import Social from "./component/social";

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400"],
});
export default function Main() {
  return (
    <>
      <div className="text-center h-[80vh] w-full flex justify-center items-center">
        <div className="z-40">
          <div className={dmsans.className}>
            <h1 className="font-extrabold  text-6xl">
              An easier way to save <span className="text-clipper">clips</span>.
            </h1>
            <div className="flex justify-center">
              <h4 className=" mt-4 max-w-3xl">
                Clipr is the easiest and most reliable Twitch clip and video
                downloader on the net. We strive to provide a wonderful user
                experience while maintaining a reliable service. Clipr will
                always remain free with minimal advertising. Built for gam
              </h4>
            </div>
          </div>
          <Input />
          <Social />
        </div>

        <div className="w-[60rem] h-80 rounded-full z-[-1]  absolute blur-2xl opacity-10 bg-[#6D28D9]"></div>
      </div>
    </>
  );
}
