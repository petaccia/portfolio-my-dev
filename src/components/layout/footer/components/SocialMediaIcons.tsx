import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

export default function SocialMediaIcons() {
  return (
    <div className="w-full flex justify-center md:justify-start space-x-4 md:mt-18">
      {/* Social Media Icons */}
      <a
        href="https://github.com/petaccia"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-secondary transition-colors"
      >
        <BsGithub className="text-2xl" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-secondary transition-colors"
      >
        <BsLinkedin className="text-2xl" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 hover:text-secondary transition-colors"
      >
        <BsTwitter className="text-2xl" />
      </a>
    </div>
  );
}

