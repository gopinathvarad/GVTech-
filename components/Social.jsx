import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/gopinathvarad" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/gopinath-varad/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UC0RLuUw_NHUfW5MeF99Bkxw",
  },
  { icon: <FaTwitter />, path: "https://x.com/Gopinath_varad" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/Gopinath_01/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
