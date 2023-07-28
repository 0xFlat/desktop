import React, { FC } from "react";
import { DesktopIconSC, DesktopSC } from "./Desktop.styled";
import AppButton from "../AppButton";
import { Earth, InfoBubble, Isign324001, Notepad2 } from "@react95/icons";
import uniswapImage from "../../../../assets/png/uniswap.png";
import dextoolsImage from "../../../../assets/png/dextools.png";
import telegramImage from "../../../../assets/png/telegram.png";
import twitterImage from "../../../../assets/png/twitter.png";
import img1984 from "../../../../assets/jpg/1984.jpeg";
import quake1Image from "../../../../assets/png/games/quake1.png";
import quake2Image from "../../../../assets/png/games/quake2.png";
import wormsImg from "../../../../assets/png/games/worms.png";
import ccImg from "../../../../assets/png/games/cc.png";
import cc2Img from "../../../../assets/png/games/cc2.png";
import lemmingsImg from "../../../../assets/png/games/lemmings.png";
import AboutMonero from "../../../modals/AboutMonero";
import FlatEarth from "../../../modals/FlatEarth";
import FakeMoon from "../../../modals/FakeMoon";
import Worms from "../../../modals/Worms";
import Command from "../../../modals/Command";
import Lemmings from "../../../modals/Lemmings";
import Quake from "../../../modals/Quake";
import Command2 from "../../../modals/Command2";
import Quake2 from "../../../modals/Quake2";

interface DesktopProps {}

const isMobile = window.innerWidth < 768;

export const desktopItems = [
  {
    title: "About $MONERO",
    icon: <InfoBubble />,
    shown: false,
    url: undefined,
    children: <AboutMonero />,
    height: isMobile ? 400 : 650,
    width: isMobile ? 350 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "flat_earth.exe",
    icon: <Earth />,
    shown: false,
    url: undefined,
    children: <FlatEarth />,
    height: isMobile ? 400 : 650,
    width: isMobile ? 350 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "fake_moon.rar",
    icon: <Isign324001 />,
    shown: false,
    url: undefined,
    children: <FakeMoon />,
    height: isMobile ? 400 : 650,
    width: isMobile ? 350 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Uniswap",
    icon: <DesktopIconSC src={uniswapImage} />,
    shown: false,
    url: "https://app.uniswap.org/#/swap?&chain=mainnet&use=v2&outputCurrency=0x6A8A637331801981A0FB29aacc3afa732b072d55",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Dextools",
    icon: <DesktopIconSC src={dextoolsImage} />,
    shown: false,
    url: "https://www.dextools.io/app/en/ether/pair-explorer/0x1e9e20080f06c4983d1e3ba8f3aa39c41fb561dd",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Telegram",
    icon: <DesktopIconSC src={telegramImage} />,
    shown: false,
    url: "https://t.me/FakeMoonBase",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Twitter",
    icon: <DesktopIconSC src={twitterImage} />,
    shown: false,
    url: "https://twitter.com/fefmlmku1984",
  },
  {
    title: "Readme.txt",
    icon: <Notepad2 />,
    shown: false,
    url: undefined,
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },

  {
    title: "1984.exe",
    icon: <DesktopIconSC src={img1984} />,
    shown: false,
    url: "https://www.youtube.com/watch?v=1131xTaVo8A",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Quake 1",
    icon: <img src={quake1Image} alt="Quake 1 Img" />,
    shown: false,
    url: undefined,
    children: <Quake />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "Quake 2",
    icon: <img src={quake2Image} alt="Quake 2 Img" />,
    shown: false,
    url: undefined,
    children: <Quake2 />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "Worms Armagheddon",
    icon: <img src={wormsImg} alt="Worms" />,
    shown: false,
    url: undefined,
    children: <Worms />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Red Alert",
    icon: <img src={ccImg} alt="C&C Red Alert" />,
    shown: false,
    url: undefined,
    children: <Command />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Yuri's Revenge",
    icon: <img src={cc2Img} alt="C&C2: Yuri's Revenge" />,
    shown: false,
    url: undefined,
    children: <Command2 />,
    height: isMobile ? 300 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Lemmings",
    icon: <img src={lemmingsImg} alt="Lemmings" />,
    shown: true,
    url: undefined,
    children: <Lemmings />,
    height: isMobile ? 250 : 550,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
];

const Desktop: FC<DesktopProps> = ({}) => {
  return (
    <DesktopSC>
      <div className="desktop-icons">
        {desktopItems.map((item, index) => (
          <>
            {item.show && (
              <AppButton
                icon={item.icon}
                title={item.title}
                key={index}
                shown={item.shown}
                url={item.url}
                children={item.children}
                width={item.width}
                height={item.height}
              />
            )}
          </>
        ))}
      </div>
    </DesktopSC>
  );
};

export default Desktop;
