import React, { useEffect } from "react";
import { Alert, Button } from "@react95/core";
import { useClippy } from "@react95/clippy";
import Layout from "./components/Layout";
import yRUGaySfx from "./assets/mp3/why-are-you-gay.mp3";
const yRUGaySound = new Audio(yRUGaySfx);

function App() {
  const [fakeGayShown, toggleFakeGayShown] = React.useState(true);
  const [bsod, toggleBsod] = React.useState(false);
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) {
      clippy.play("GetAttention");
    }
  }, [clippy]);

  const BSOD = () => {
    return (
      <div className="bsod">
        <div className="bsod__content">
          <div
            style={{
              background: "white",
              padding: "0.25rem",
              color: "navy",
              maxWidth: 150,
              fontWeight: 600,
              textAlign: "center",
              margin: "auto",
            }}
          >
            <h3 style={{ textAlign: "center", margin: 0 }}>WARNING</h3>
          </div>
          <p>An error has occured. To continue:</p>
          <p>
            Click "$GLIZZY" below and press Enter to return to your desktop,
            or:
          </p>
          <p>
            Press CTRL+ALT+DEL to restart your computer. But be warned, doing so
            has a chance to initiate GLIZZY OVERDRIVE.
          </p>
          <p>Error: 69 : 420 : $6L1ZZY</p>
          <p style={{ textAlign: "center" }}>Click to continue:</p>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={async () => {
                toggleFakeGayShown(false);
                toggleBsod(false);
                
              }}
            >
              $GLIZZY ME
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app">
      {bsod && <BSOD />}
      {fakeGayShown && (
        <Alert
          title="$GLIZZY"
          style={{ zIndex: 5 }}
          message="DO YOU WANT GLIZZY OVERDRIVE!"
          closeAlert={() => toggleFakeGayShown(false)}
          buttons={[
            {
              value: "YES",
              onClick: async () => {
              
              
              },
            },
            {
              value: "GLIZZY",
              onClick: async () => {
                await yRUGaySound.play();
                toggleBsod(true);
              },
            },
          ]}
        />
      )}
      <Layout />
    </div>
  );
}

export default App;
