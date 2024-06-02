import GithubIcon from "../assets/icons/github-mark-white.svg";
import LinkedinIcon from "../assets/icons/linkedin-icon.svg";
import EmailIcon from "../assets/icons/email-icon.png";
import PhoneIcon from "../assets/icons/phone-icon.png";
import Image from "next/image";

function Contact() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 z-20 flex items-center gap-6">
      <div>
        <img src={GithubIcon} height={24} width={24} />
      </div>
      <div>
        <img src={LinkedinIcon} height={24} width={24} />
      </div>
      <div>
        <Image src={EmailIcon} height={32} width={32} alt="email" />
      </div>
      <div>
        <Image src={PhoneIcon} height={32} width={32} alt="phone" />
      </div>
    </div>
  );
}

export default Contact;
