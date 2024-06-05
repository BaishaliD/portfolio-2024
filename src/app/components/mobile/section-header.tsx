"use client";

function SectionHeader({ title = "" }) {
  return (
    <div className="z-30 relative">
      <div className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl">
        {title}
      </div>
      <div className="w-[10rem] h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-center mx-auto"></div>
    </div>
  );
}

export default SectionHeader;
