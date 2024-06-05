const TABS = [
  { section: "Skills", hideInMd: false },
  { section: "Projects", hideInMd: false },
  { section: "Experience", hideInMd: false },
  { section: "Resume", hideInMd: true },
];

function Tabs({ smoothScroll }: { smoothScroll: (param: string) => void }) {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 flex p-8 gap-4 z-10">
      {TABS.map((tab) => (
        <Tab
          section={tab.section}
          smoothScroll={smoothScroll}
          hideInMd={tab.hideInMd}
        />
      ))}
    </div>
  );
}

function Tab({
  section,
  smoothScroll,
  hideInMd,
}: {
  section: string;
  smoothScroll: (param: string) => void;
  hideInMd: boolean;
}) {
  return (
    <div
      className={`pb-1 px-1 border-b border-slate-500 cursor-pointer text-slate-200 ${
        hideInMd ? "block md:hidden" : "block"
      }`}
      onClick={() => smoothScroll(section)}
    >
      {section}
    </div>
  );
}

export default Tabs;
