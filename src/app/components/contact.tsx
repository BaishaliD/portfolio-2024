import GithubIcon from "../assets/icons/github-mark-white.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import EmailIcon from "../assets/icons/email-icon.png";
import PhoneIcon from "../assets/icons/phone-icon.png";
import Image from "next/image";
import { useState } from "react";

const LINEKDIN_URL = "https://www.linkedin.com/in/baishali-datta-84a06375/";
const GITHUB_URL = "https://github.com/BaishaliD";
const EMAIL = "baishali95920@gmail.com";
const PHONE = "+91 9874723102";

function Contact() {
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
    <>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 flex items-center gap-6">
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open(GITHUB_URL, "_blank");
          }}
        >
          <img src={GithubIcon} height={24} width={24} />
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            window.open(LINEKDIN_URL, "_blank");
          }}
        >
          <img src={LinkedinIcon} height={24} width={24} />
        </div>
        <div className="cursor-pointer" onClick={handleCopyEmail}>
          <Image src={EmailIcon} height={32} width={32} alt="email" />
        </div>
        <div className="cursor-pointer" onClick={handleCopyPhone}>
          <Image src={PhoneIcon} height={32} width={32} alt="phone" />
        </div>
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100000]">
          {phoneCopied && (
            <div className="bg-zinc-200 text-black w-fit text-sm px-4 py-2 rounded-lg w-max">
              Phone number copied!
            </div>
          )}
          {emailCopied && (
            <div className="bg-zinc-200 text-black w-fit text-sm px-4 py-2 rounded-lg w-max">
              Email address copied!
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
