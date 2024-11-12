import { useEffect, useState } from "react";
import HeaderButton from "./components/logo/header-button";
import { HeaderWrapper } from "./styles/header";
import { FaLinkedin, FaGithub, FaBloggerB, FaFileAlt } from "react-icons/fa";

export default function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderButton link="https://www.linkedin.com/in/americano212">
        {isSmallScreen ? <FaLinkedin size={30} /> : "LINKEDIN"}
      </HeaderButton>
      <HeaderButton link="https://github.com/americano212">
        {isSmallScreen ? <FaGithub size={30} /> : "GITHUB"}
      </HeaderButton>
      <HeaderButton link="https://pypystory.tistory.com">
        {isSmallScreen ? <FaBloggerB size={30} /> : "BLOG"}
      </HeaderButton>
      <HeaderButton link="https://resume.dongjun.me">{isSmallScreen ? <FaFileAlt size={30} /> : "RESUME"}</HeaderButton>
    </HeaderWrapper>
  );
}
