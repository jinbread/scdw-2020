import React, { Suspense, useRef } from "react";
import "./styles.css";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { motion } from "framer-motion";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import contentData from "./data";

import { SpeakerPageTemplate } from "./components/Speaker";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./page/Home";

const scrollToRef = (ref) => {
  window.scrollTo({ top: ref.current.offsetTop - 120, behavior: "smooth" });
};

function Model({ props, url }) {
  const { scene } = useLoader(GLTFLoader, url);
  useFrame(() => (ref.current.rotation.x += 0.01));
  const ref = useRef();

  return (
    <group {...props} dispose={null} ref={ref}>
      <group
        position={[-150, 0, 200]}
        rotation={[0, 0.2, 0]}
        scale={[0.3, 0.3, 0.3]}
      >
        <primitive object={scene} />
      </group>
    </group>
  );
}

export function GlitchPage() {
  return (
    <Canvas camera={{ position: [-100, -130, -50] }}>
      <ambientLight intensity={1} />
      <pointLight position={[-400, -400, -400]} />
      <Suspense fallback={null}>
        <Model url="glbtest.glb" />
      </Suspense>
    </Canvas>
  );
}

export default function App() {
  const aboutRef = React.useRef(null);
  const speakerRef = React.useRef(null);
  const cocRef = React.useRef(null);
  const FAQRef = React.useRef(null);

  const aboutScroll = () => scrollToRef(aboutRef);
  const speakerScroll = () => scrollToRef(speakerRef);
  const cocScroll = () => scrollToRef(cocRef);
  const FAQScroll = () => scrollToRef(FAQRef);

  return (
    <Router>
      <div className="App">
        <Header>
          <motion.div className="heading-2" onClick={aboutScroll}>
            About
          </motion.div>
          <motion.div className="heading-2" onClick={speakerScroll}>
            Program
          </motion.div>
          <motion.div className="heading-2" onClick={cocScroll}>
            CoC
          </motion.div>
          <motion.div className="heading-2" onClick={FAQScroll}>
            FAQ
          </motion.div>
        </Header>

        <Switch>
          <Route exact path="/">
            <div style={{ position: "relative", height: "100vh" }}>
              <div
                style={{
                  textAlign: "center",
                  display: "grid",
                  alignItems: "center",
                  // position: "absolute",
                  // top: 100,
                  height: "100vh",
                  maxWidth: 1280,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <div>
                  <div
                    className="heading-1"
                    style={{
                      fontWeight: 400,
                      fontSize: "5em",
                      textAlign: "center"
                    }}
                  >
                    SPECTRUM CON DESIGN WEEK 2020 A WHOLE NEW WORLD SPECTRUM CON
                    DESIGN WEEK 2020 A WHOLE NEW WORLD
                  </div>
                </div>
              </div>
              <div className="canvas">
                <GlitchPage />
              </div>
            </div>
            <Home
              data={contentData}
              aboutRef={aboutRef}
              speakerRef={speakerRef}
              cocRef={cocRef}
              FAQRef={FAQRef}
            />
          </Route>
          {contentData.map((x, i) => {
            return (
              <Route exact path={`/${x.link}`} key={i}>
                <SpeakerPageTemplate
                  localData={x}
                  globalData={contentData}
                  index={i}
                />
              </Route>
            );
          })}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
