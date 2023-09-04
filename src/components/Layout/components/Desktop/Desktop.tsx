import React, { FC } from "react";
import { DesktopIconSC, DesktopSC } from "./Desktop.styled";
import AppButton from "../AppButton";
import { Earth, InfoBubble, Mspaint, Notepad2 } from "@react95/icons";
import uniswapImage from "../../../../assets/png/uniswap.png";
import dextoolsImage from "../../../../assets/png/dextools.png";
import telegramImage from "../../../../assets/png/telegram.png";
import twitterImage from "../../../../assets/png/twitter.png";
import mainLogo from "../../../../assets/png/logo.png";
import alexJones from "../../../../assets/png/alexjones.png";
import quake1Image from "../../../../assets/png/games/quake1.png";
import sonicImage from "../../../../assets/png/games/sonic.png";
import quake2Image from "../../../../assets/png/games/quake2.png";
import unrealImage from "../../../../assets/png/games/unreal-tournament.png";
import wormsImg from "../../../../assets/png/games/worms.png";
import ccImg from "../../../../assets/png/games/cc.png";
import cc2Img from "../../../../assets/png/games/cc2.png";
import cStrike from "../../../../assets/png/games/cstrike.png";
import lemmingsImg from "../../../../assets/png/games/lemmings.png";
import About from "../../../modals/About";
import Worms from "../../../modals/Worms";
import Command from "../../../modals/Command";
import Lemmings from "../../../modals/Lemmings";
import Quake from "../../../modals/Quake";
import Command2 from "../../../modals/Command2";
import Quake2 from "../../../modals/Quake2";
import Readme from "../../../modals/Readme";
import UnrealTournament from "../../../modals/UnrealTournament";
import Paint from "../../../modals/Paint";
import Sonic from "../../../modals/Sonic";
import CartoonStrike from "../../../modals/CartoonStrike";

interface DesktopProps {}

const isMobile = window.innerWidth < 768;

export const desktopItems = [
  {
    title: "About $GLIZZY",
    icon: <DesktopIconSC src={mainLogo} />,
    shown: false,
    url: undefined,
    children: <About />,
    height: isMobile ? 400 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "Buy $GLIZZY",
    icon: <DesktopIconSC src={uniswapImage} />,
    shown: false,
    url: "https://app.uniswap.org/#/swap?outputCurrency=0xfa5796b475e140cad07834dc7d3eac7d2cfe3fb5",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Dextools",
    icon: <DesktopIconSC src={dextoolsImage} />,
    shown: false,
    url: "https://www.dextools.io/app/en/ether/pair-explorer/0x8a41306495cb6245f416c4b351936a34d16162c7",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Telegram",
    icon: <DesktopIconSC src={telegramImage} />,
    shown: false,
    url: "https://t.me/GLIZZY_ERC20",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
    show: isMobile ? true : true,
  },
  {
    title: "Twitter",
    icon: <DesktopIconSC src={twitterImage} />,
    shown: false,
    url: "https://twitter.com/GLIZZYERC",
  },
  {
    title: "ReadMe.txt",
    icon: <Notepad2 />,
    shown: false,
    url: undefined,
    height: isMobile ? 400 : "",
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
    children: <Readme />,
  },
  {
    title: "Worms Armageddon",
    icon: <img src={wormsImg} alt="Worms" />,
    shown: false,
    url: undefined,
    children: <Worms />,
    height: isMobile ? 300 : 700,
    width: isMobile ? 350 : 800,
    show: isMobile ? false : true,
  },
  {
    title: "Lemmings",
    icon: <img src={lemmingsImg} alt="Lemmings" />,
    shown: false,
    url: undefined,
    children: <Lemmings />,
    height: isMobile ? 250 : 550,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
  },
  {
    title: "Paint",
    icon: <Mspaint />,
    shown: false,
    url: undefined,
    height: isMobile ? 400 : 600,
    width: isMobile ? 350 : 800,
    show: isMobile ? true : true,
    children: <Paint />,
  },
  {
    title: "GLIZZYTOK",
    icon: <DesktopIconSC src={alexJones} />,
    shown: false,
    url: "https://www.tiktok.com/@4pfmemes/video/7272362847244471598/",
    height: isMobile ? 400 : 650,
    width: isMobile ? 300 : 650,
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
      <a
        href="https://app.uniswap.org/#/swap?outputCurrency=0xfa5796b475e140cad07834dc7d3eac7d2cfe3fb5"
        className="ticker"
        target="_blank"
        rel="noopener noreferrer"
      >
      </a>
    </DesktopSC>
  );
};

export default Desktop;
