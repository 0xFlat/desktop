import { Frame } from "@react95/core";
import React, { FC } from "react";



interface aboutprops {}

const About: FC<aboutprops> = ({}) => {
  return (
    <Frame boxShadow="in" bg="white" className="about">
      <div>
        <div className="title" style={{ marginBottom: 12 }}>
        </div>
        
        $GLIZZY
      
        

        <a href="https://app.uniswap.org">
          BUY $GLIZZY
        </a>
        <p>https://t.me/GLIZZY_ERC20</p>
        <p>https://twitter.com/glizzyerc</p>
        <p>
        GLIZZY WILL REVOLUTIONIZE NPC STREAMS 

Started by a based dev https://www.dextools.io/app/en/ether/pair-explorer/0x8a41306495cb6245f416c4b351936a34d16162c7
          <div className="images">
          </div>

        </p>
      </div>
    </Frame>
  );
};

export default About;
