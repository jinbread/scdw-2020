import React from "react";
import { SpeakerPage } from "../components/Speaker";
import { Page } from "../components/Page";

import { FAQPage } from "./FAQ";
import { CoCPage } from "./CoC";
import { SponsorPage } from "./Sponsor";

import { Canvas, useFrame } from "react-three-fiber";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export function Home({ data, aboutRef, speakerRef, cocRef, FAQRef }) {
  return (
    <div className="content">
      <Page center={true}>
        <div
          style={{
            textAlign: "center",
            display: "grid",
            alignItems: "center",
            position: "absolute",
            top: 0,
            height: "80vh"
          }}
        >
          <div>
            <div className="heading-1">
              SPECTRUM CON DESIGN WEEK 2020 A WHOLE NEW WORLD SPECTRUM CON
              DESIGN WEEK 2020 A WHOLE NEW WORLD
            </div>
          </div>
        </div>
        <div className="canvas">
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </Canvas>
        </div>

        {/* <img className="main-video" src={MainVideo} alt={"video goes here"} /> */}
      </Page>
      <Page center={true} myRef={aboutRef}>
        <div className="title">
          <div className="heading-1">
            Spectrum Con <br />
            Design Week 2020
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto max-content",
            gridGap: 95
          }}
        >
          <div>
            <div className="heading-2">Nov 23, 2020 - Dec 4, 2020</div>
            <div className="body-1">
              디자이너들이 자신의 가치를 확인하고 더욱 발전하기 위해서는 여러
              각도에서의 자극과 탐구가 필요합니다. 그것이 온라인이든
              오프라인이든 상관없이 디자이너들이 이러한 필요를 느낄 때 자유롭게
              찾아와서 이야기할 수 있는 기회와 공간이 필요하다고 생각했습니다.
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <svg width="314" height="113" viewBox="0 0 314 113" fill="none">
              <rect width="157.863" height="89.7637" fill="#06ACFF" />
              <rect
                x="34.5054"
                y="9.65204"
                width="224.286"
                height="93.6245"
                fill="#06ACFF"
              />
              <rect
                x="69.011"
                y="19.304"
                width="244.989"
                height="93.6245"
                fill="#06ACFF"
              />
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                className="ticket"
              >
                BUY EARLY BIRD
              </text>
            </svg>
          </div>
        </div>
      </Page>
      <SpeakerPage data={data} myRef={speakerRef} />
      <SponsorPage />
      <CoCPage myRef={cocRef} />
      <FAQPage myRef={FAQRef} />
    </div>
  );
}
