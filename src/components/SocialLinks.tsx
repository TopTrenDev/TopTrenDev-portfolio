/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: SocialLinks.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/TopTrenDev" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="https://t.me/toptrendev" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faTelegram}
        />
      </a>
      <a href="https://x.com/toptrendev" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faX}
        />
      </a>
    </div>
  );
};

export default SocialLinks;

