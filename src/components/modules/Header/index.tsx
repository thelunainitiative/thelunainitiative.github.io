import React from "react";
import Image from "next/image";
import HamburgerMenu from "@/../public/images/hamburger-menu.svg";
import BlackLogo from "@/../public/images/black_logo.png";
import InstagramLogo from "@/../public/images/instagram_logo.png";
import LinkedinLogo from "@/../public/images/linkedin_logo.png";

const Header: React.FC = () => (
  <header>
    <div className="bg-luna-beige min-h-16">
      <div className="flex py-4 justify-between items-center px-6">
        <div>
          <Image src={BlackLogo} alt="Luna black logo" height={50} />
        </div>
        <div className="flex h-fit justify-center items-center">
          <span className="mr-3">
            <HamburgerMenu />
          </span>
          <Image src={InstagramLogo} alt="instagram logo" height={30} />
          <Image src={LinkedinLogo} alt="linkedin logo" height={30} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
