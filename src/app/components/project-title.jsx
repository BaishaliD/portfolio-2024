import Link from "next/link";
import Back from "../assets/icons/back-arrow.svg";

function ProjectTitle({ title }) {
  return (
    <div className="flex items-center sticky md:static w-full top-0 left-0 bg-slate-900 md:bg-black z-[9999] p-4 mb-8">
      <Link href={"/"}>
        <div className="md:fixed md:top-12 md:left-12 text-white rounded-full border border-white flex justify-center items-center h-8 w-8 cursor-pointer">
          <img src={Back} />
        </div>
      </Link>
      <div className="text-2xl md:text-4xl text-white mx-auto md:mb-10 md:my-20 text-center">
        {title}
        <div className="hidden md:visible h-1 w-[60%] md:w-[30%] bg-gradient-to-r from-indigo-500 to-purple-500 text-center mx-auto mt-4"></div>
      </div>
    </div>
  );
}

export default ProjectTitle;
