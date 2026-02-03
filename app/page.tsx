import Image from "next/image";
import profilePic from "../public/ben4.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-slate-100">
      <div className="py-30 flex space-x-30 ">
        <h1 className="pt-35 text-2xl">
          Hi! I am <br />
          <span className="font-extrabold text-4xl"> Benedict Gutierrez</span>
          <br />A Web and Machine Learning Developer
        </h1>
        <div>
          <Image
            src={profilePic}
            alt="Benedict Gutierrez"
            width={400}
            height={300}
            className="rounded-full bg-slate-200" 
          />
        </div>
      </div>

      <div></div>
    </div>
  );
}