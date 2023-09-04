import { Frame } from "@react95/core";
import React, { FC } from "react";

interface ReadmeProps {}

const Readme: FC<ReadmeProps> = ({}) => {
  return (
    <Frame boxShadow="in" bg="white" className="readme">
      <div>
        <h1 style={{ marginTop: 0 }}> ATTENTION </h1>
        <p>
          $GLIZZY is revolutionizing the NPC live streaming market! 
          @GLIZZYBOT TIKTOK
          
          https://twitter.com/glizzyerc
        </p>
        <p>
          $GLIZZY :{" "}
          <a
            className="$GLIZZY"
            href="https://www.dextools.io/app/en/ether/pair-explorer/0x8a41306495cb6245f416c4b351936a34d16162c7"
          >
            https://www.dextools.io/app/en/ether/pair-explorer/0x8a41306495cb6245f416c4b351936a34d16162c7
          </a>
        </p>
      </div>
    </Frame>
  );
};

export default Readme;
