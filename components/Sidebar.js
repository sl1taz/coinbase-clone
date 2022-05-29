import { useState } from "react";
import Image from "next/image";

import CoinbaseLogo from "../assets/images/cb-logo.png";
import { navItems } from "../assets/js/navItems";

import {
  Wrapper,
  LogoContainer,
  Logo,
  NavItemsContainer,
  NavItem,
  NavIcon,
  NavTitle,
} from "./Sidebar.styles";


const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <Wrapper>
      <LogoContainer>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase logo" />
        </Logo>
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((item, i) => {
          return (
            <NavItem key={i} onClick={() => setActiveIcon(item.title)}>
              <NavIcon style={{ color: item.title === activeIcon && "#3773f5" }}>
                {item.icon}
              </NavIcon>
              <NavTitle>{item.title}</NavTitle>
            </NavItem>
          );
        })}
      </NavItemsContainer>
    </Wrapper>
  );
};

export default Sidebar;
