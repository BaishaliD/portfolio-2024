import { motion } from "framer-motion";
const TABS = [
  { section: "Skills", hideInMd: false },
  { section: "Projects", hideInMd: false },
  { section: "Experience", hideInMd: false },
  { section: "Resume", hideInMd: true },
];

function Tabs({ smoothScroll }: { smoothScroll: (param: string) => void }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        top: 20,
      }}
      animate={{
        opacity: 1,
        top: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      viewport={{ once: true }}
      className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 flex p-8 gap-8 z-10"
    >
      {TABS.map((tab) => (
        <Tab
          section={tab.section}
          smoothScroll={smoothScroll}
          hideInMd={tab.hideInMd}
        />
      ))}
    </motion.div>
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
      className={`pb-1 px-1 border-b border-slate-500 cursor-pointer text-white ${
        hideInMd ? "block md:hidden" : "block"
      }`}
      onClick={() => smoothScroll(section)}
    >
      {section}
    </div>
  );
}

export default Tabs;
