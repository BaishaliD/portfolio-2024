import React, { useState } from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../utils/cn";
import Button from "../components/button";

const LINEKDIN_URL = "https://www.linkedin.com/in/baishali-datta-84a06375/";
const LINEKDIN_TEXT = "linkedin.com/in/baishali-datta-84a06375";
const GITHUB_URL = "https://github.com/BaishaliD";
const GITHUB_TEXT = "github.com/BaishaliD";
const EMAIL = "baishali95920@gmail.com";
const PHONE = "+91 9874723102";

function ContactMeSection() {
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE);
    setPhoneCopied(true);
    setTimeout(() => {
      setPhoneCopied(false);
    }, 800);
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <div>
      <div className="py-36 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Let's connect
        </h1>
        <div className="relative z-20 flex flex-col gap-8 mt-12 items-center">
          <Button
            label={"LinkedIn : " + LINEKDIN_TEXT}
            handleClick={() => {
              window.open(LINEKDIN_URL, "_blank");
            }}
          />
          <Button
            label={"GitHub : " + GITHUB_TEXT}
            handleClick={() => {
              window.open(GITHUB_URL, "_blank");
            }}
          />
          <Button label={"Phone : " + PHONE} handleClick={handleCopyPhone} />
          <Button label={"Email : " + EMAIL} handleClick={handleCopyEmail} />
          {phoneCopied && (
            <div className="bg-zinc-200 text-black w-fit text-sm px-4 py-2 rounded-lg">
              Phone number copied!
            </div>
          )}
          {emailCopied && (
            <div className="bg-zinc-200 text-black w-fit text-sm px-4 py-2 rounded-lg">
              Email address copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
